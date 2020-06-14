// Modules required to run the application
const express = require('express');
const { ensureAuthenticated } = require('../config/auth');

// Creates 'mini app'
const router = express.Router();

// Homepage
router.get('/home', function(req, res){
    res.render("./home/home");
});

// About page
router.get('/about', /*ensureAuthenticated, */ function(req, res){
    res.render("./home/about");
});

module.exports = router;