//Dependencies
//==================================================
var express = require("express");
var methodOverride = require("method-override");
var passport = require('passport');

//Initialize express server and port
//==================================================
var app = express();
const PORT = process.env.PORT || 8080;

// Serve phonegap content via www folder
app.use(express.static(__dirname + "/www"));

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




//Route handling
//==================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);


// Requiring our models for database syncing
var db = require("./app/models");

//Sync models with database and start listening to PORT
//==================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
