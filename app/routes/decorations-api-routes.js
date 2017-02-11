var db = require("../models");

// Skeleton of route assumes that the "decorations" model is linked to the party database
module.exports = function(app) {
  app.get("/api/decorations", function(req, res) {
    // get all the decorations
    db.Decor.findAll({}).then(function(results) {
      res.json(results);
    });
  });
