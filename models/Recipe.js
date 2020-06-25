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
    directions: {
        type: String,
        required: true
    },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports  = Recipe;