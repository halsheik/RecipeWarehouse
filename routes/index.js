// Modules required to run the application
const express = require('express');

// Creates 'mini app'
const router = express.Router();

router.get('/', function(req, res){
    res.render("./home/home");
});

// Homepage
router.get('/home', function(req, res){
    res.render("./home/home");
});

// About page
router.get('/about', function(req, res){
    res.render("./home/about");
});

module.exports = router;