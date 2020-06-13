// Modules required to run the application
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

// Creates an express application
var app = express();

// Database Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log('MongoDB connected...')) 
    .catch(err => console.log(err));

// Accepts a parameter from the 'ENVIROMENT' for what 
// port to listen on and sends to sever
app.set("port", process.env.PORT || 3000);

// Sets up view engine (using 'ejs')
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Bodyparser - urlencoded() is used to recognize incoming Request Object as strings or arrays
// Specifically to help with POST and PUT Requrests
app.use(express.urlencoded({ extended: false })); // 'extended' has to do with whether or not a nested object can be used ('false' means it cannot)

// Express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

// Connect flash
app.use(flash());

// Route Files
app.use('/', require('./routes/index')); // Module containing basic paths for application
app.use('/users', require('./routes/users')); // Module containing paths for user login and registration

app.listen(app.get("port"), function(){
    console.log(`Listening to server on port ${app.get("port")}...`);
});