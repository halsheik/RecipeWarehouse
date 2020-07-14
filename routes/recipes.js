// Modules required to run the application
const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const { ensureAuthenticated } = require('../config/auth');

// Creates 'mini app'
const router = express.Router();

// Models
const Recipe = require('../models/Recipe'); // Recipe Model

// Set up storage engine
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'public/uploads');
    },

    filename: function(req, file, callback){
        crypto.pseudoRandomBytes(16, function(err, raw) {
            if (err) return callback(err);
          
            callback(null, raw.toString('hex') + path.extname(file.originalname));
        });
    }
});

const upload = multer({
    storage: storage
});

// My Recipes
router.get('/myRecipes', ensureAuthenticated, function(req, res){
    Recipe.find({}, function(err, recipes){
        if(err){
          console.log(err);
        } else {
          res.render('./home/myRecipes', {
            recipes: recipes,
            recipeImageFileName: recipes.recipeImageFileName,
            recipeDescription: recipes.recipeDescription,
            ingredients: recipes.ingredients,
            directions: recipes.directions
          });
        }
      });
});

// Create Recipe Page
router.get('/createRecipe', ensureAuthenticated, function(req, res){
    res.render('./home/createRecipe');
});

// Create Recipe
router.post('/createRecipe', upload.single('recipeImage'), ensureAuthenticated, function(req, res){
    const { recipeName, recipeDescription, ingredients, directions } = req.body;
    let errors = [];

    // Checks that all fields are not empty
    if(!recipeName || !recipeDescription || !ingredients || !directions){
        errors.push({ msg: 'Please fill in all fields.' });
    }

    // Checks that an image is uploaded
    if(!req.file){
        errors.push({ msg: 'Please add an image of your recipe' });
    }

    // Checks for any errors and prevents recipe creation if any
    if(errors.length > 0){
        console.log(errors);
        res.render('./home/createRecipe', {
            errors
        });
    } else {
        // Create a new 'Recipe' using our model
        const newRecipe = new Recipe({
            recipeName: recipeName,
            author: req.user._id,
            recipeImageFileName: req.file.filename,
            recipeDescription: recipeDescription,
            ingredients: ingredients,
            directions: directions,
        }); 

        console.log(newRecipe);

        // Saves recipe to mongoDB database
        newRecipe.save().then(function(){
            res.redirect('/recipes/myRecipes');
        }).catch(function(err){
            console.log(err);
        });
    }

});

module.exports = router;