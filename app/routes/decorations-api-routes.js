var db = require("../models");

// Skeleton of route assumes that the "decorations" model is linked to the party database
module.exports = function(app) {
  app.get("/api/decorations", function(req, res) {
    // get all the decorations
    db.Decor.findAll({}).then(function(results) {
      res.json(results);
    });
  });

    // create all the decorations
app.post("/api/decorations", function(req, res) {
    db.Decor.create(req.body).then(function(dbDecor) {
      res.json(dbDecor);
    });
  });

    // delete all the decorations
app.delete("/api/decorations/:id", function(req, res) {
    db.Decor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDecor) {
      res.json(dbDecor);
    });
  });
};
