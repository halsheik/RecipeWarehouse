// Modules required to run the application
const express = require('express');
const { ensureAuthenticated } = require('../config/auth');

// Creates 'mini app'
const router = express.Router();

// Models
const Recipe = require('../models/Recipe'); // Recipe Model

// My Recipes
router.get('/myRecipes', ensureAuthenticated, function(req, res){
    Recipe.find({}, function(err, recipes){
        if(err){
          console.log(err);
        } else {
          res.render('./home/myRecipes', {
            recipes: recipes,
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
router.post('/createRecipe',  ensureAuthenticated, function(req, res){
    const { recipeName, ingredients, directions } = req.body;
    let errors = [];

    // Chekcs that all fields are not empty
    if(!recipeName || !ingredients || !directions){
        errors.push({ msg: 'Please fill in all fields.' });
    }

    // Checks for any errors and prevents recipe creation if any
    if(errors.length > 0){
        res.render('./home/createRecipe', {
            errors,
            recipeName,
            ingredients,
            directions
        });
    } else {
        // Create a new 'Recipe' using our model
        const newRecipe = new Recipe({
            recipeName: recipeName,
            author: req.user._id,
            ingredients: ingredients,
            directions: directions,
        }); 

        // Saves recipe to mongoDB database
        newRecipe.save().then(function(){
            res.redirect('/recipes/myRecipes');
        }).catch(function(err){
            console.log(err);
        });
    }

});

module.exports = router;