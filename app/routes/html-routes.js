// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/index.html"));
  // });

    // index route loads view.html
    app.get('/register', function(req, res) {
        res.sendFile(path.join(__dirname + "/../../www/register.html"));
    });

  // // cms route loads cms.html
  // app.get("/food", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/food.html"));
  // });
  //
  // // blog route loads blog.html
  // app.get("/decorations", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/decorations.html"));
  // });
  //
  // // authors route loads author-manager.html
  // app.get("/games", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/games.html"));
  // });

};
