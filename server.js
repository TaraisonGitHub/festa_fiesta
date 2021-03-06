var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;


var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/www"));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


// Requiring our models for syncing
var db = require("./app/models");

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// require("./app/routes/login-routes.js")(app);
// require("./app/routes/html-routes.js")(app);
// require("./app/routes/api-routes.js");

// listen on port 8080
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
