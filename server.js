var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var oauth = require('oauth').OAuth;
var querystring = require('querystring');

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./app/models");

app.use(express.cookieParser());
app.use(express.session({
    secret: 'slkdfjnlsrubgstrlgsunrtgstrq'
}));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "./app/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./app/controllers/fiesta_controller");

require("./app/routes/login-routes.js")(app);
require("./app/routes/html-routes.js");
require("./app/routes/api-routes.js");

// listen on port 3000
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
