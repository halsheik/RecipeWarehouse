// Modules required to run the application
const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Creates 'mini app'
const router = express.Router();

// User model
const User = require('../models/User');

// Login Page
router.get('/login', function(req, res){
    res.render("./home/login");
});

// Registration Page
router.get('/register', function(req, res){
    res.render("./home/register");
});

// Registration
router.post('/register', function(req, res){
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // Check required fields - make sure all values are inputted
    if(!name || !email || !password || !password2){
        errors.push({ msg: 'Please fill in all feilds' });
    }

    //Check passwords match
    if(password !== password2){
        errors.push({ msg: "Passwords do not match" });
    }

    // Check password length
    if(password.length < 6){
        errors.push({ msg: "Password should be at least six characters long" });
    }

    // Checks for any errors and prevents registration/redirection
    if(errors.length > 0){
        res.render('./home/register', {
            errors,
            name,
            email,
            password,
            password2
        });
    }
    else{
        // Validation passed
        User.findOne({ email: email })
        .then(function(user){
            if(user){
                // User already exists
                errors.push({ msg: "Email is already registered" });

                // Reroutes to registration page
                res.render('./home/register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else {
                // Create a new 'User' using our model
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                }); 

                // Hash Password
                bcrypt.genSalt(10, function(err, salt){
                    bcrypt.hash(newUser.password, salt, function(err, hash){
                        if(err){
                            throw err;
                        }

                        // Sets the password to the hashed password
                        newUser.password = hash;

                        // Saves password to mongoDB database
                        newUser.save().then(function(user){
                            res.redirect('/users/login');
                        }).catch(function(err){
                            console.log(err);
                        });
                    });
                });
            }
        });
    }
});

// Login Handle
router.post('/login', function(req, res, next){
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/users/login',
        failureFlash: false
    })(req, res, next);
});

// Logout Handle
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/users/login');
});


module.exports = router;