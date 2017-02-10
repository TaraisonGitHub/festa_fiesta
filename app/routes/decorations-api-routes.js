var dbTwo = require("../models");


// Skeleton of route assumes that the "decorations" model is linked to the party database
module.exports = function(app) {
  app.get("/api/decorations", function(req, res) {
    // get all the decorations
    dbTwo.decorations.findAll({}).then(function(results) {
      res.json(results);
    });
  });


/*
  app.get("/api/authors/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
*/
};
