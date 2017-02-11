var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

passport.use(new Strategy({
	clientID: '1144869418943929',
	clientSecret: 'CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED',
	callbackURL: 'http://https://festafiesta.herokuapp.com/login/return'
	},
	function(accessToken, refreshToken, profile, cb) {
		return cb(null, profile);
	}
));

passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/www"));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");
//
// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

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

var routes = require("./app/controllers/fiesta_controller");

require("./app/routes/login-routes.js")(app);
require("./app/routes/html-routes.js")(app);
require("./app/routes/api-routes.js");

// listen on port 8080
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
