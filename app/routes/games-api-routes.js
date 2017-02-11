var db = require("../models");


// Skeleton of route assumes that the "games" model is linked to the party database
module.exports = function(app) {
  app.get("/api/games", function(req, res) {
    // get all the games
    db.Games.findAll({}).then(function(results) {
      res.json(results);
    });
  });

    // create all the games
app.post("/api/games", function(req, res) {
    db.Games.create(req.body).then(function(dbGames) {
      res.json(dbGames);
    });
  });

    // delete all the games
app.delete("/api/games/:id", function(req, res) {
    db.Games.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGames) {
      res.json(dbGames);
    });
  });
};
