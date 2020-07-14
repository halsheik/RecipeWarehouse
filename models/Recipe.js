// Modules required to run the application
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    recipeImageFileName: {
        type: String,
        required: true
    },
    recipeDescription: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    directions: {
        type: Array,
        required: true
    }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports  = Recipe;