var db = require("../models");


// Skeleton of route assumes that the "games" model is linked to the party database
module.exports = function(app) {
  app.get("/api/games", function(req, res) {
    // get all the games
    db.Games.findAll({}).then(function(results) {
      res.json(results);
    });
  });
};
