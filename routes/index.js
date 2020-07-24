// Modules required to run the application
const express = require('express');
const { ensureAuthenticated } = require('../config/auth');

// Creates 'mini app'
const router = express.Router();

// Homepage
router.get('/', function(req, res){
    res.render("./home/index");
});

// About page
router.get('/about', /*ensureAuthenticated, */ function(req, res){
    res.render("./home/about");
});

// Contact Us page
router.get('/contactUs', /*ensureAuthenticated, */ function(req, res){
    res.render("./home/contactUs");
});

module.exports = router;