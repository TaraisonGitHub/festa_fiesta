var db = require("../models");


// Skeleton of route assumes that the "music" model is linked to the party database
module.exports = function(app) {
  app.get("/api/music", function(req, res) {
    // get all the music
    db.Music.findAll({}).then(function(results) {
      res.json(results);
    });
  });

    // create all the music
app.post("/api/music", function(req, res) {
    db.Music.create(req.body).then(function(dbMusic) {
      res.json(dbMusic);
    });
  });

    // delete all the music
app.delete("/api/music/:id", function(req, res) {
    db.Music.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMusic) {
      res.json(dbMusic);
    });
  });
};