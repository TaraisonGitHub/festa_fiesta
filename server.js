//Dependencies
//==================================================
var express = require("express");
var methodOverride = require("method-override");
var passport = require('passport');
var flash = require('connect-flash');
var passportConfig = require('./app/config/passport.js');

//Initialize express server and port
//==================================================
var app = express();
const PORT = process.env.PORT || 8080;

app.use('/www', express.static(__dirname + '/www'));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
//==================================================
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keepthisasecret', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
//==================================================
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('sucess_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})




//Route handling
//==================================================
require("./app/routes/html-routes.js")(app);
require("./app/routes/api-routes.js")(app, passport);


// Requiring our models for database syncing
var db = require("./app/models");

//Sync models with database and start listening to PORT
//==================================================
db
    .sequelize
    .sync()
    .then(function() {
        app.listen(PORT, function() {
            console.log('App is alive on PORT ' + PORT);
        })
    });
