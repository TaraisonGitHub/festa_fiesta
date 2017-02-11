var db = require("../models");

// Skeleton of route assumes that the "decorations" model is linked to the party database
module.exports = function(app) {
  app.get("/api/decorations", function(req, res) {
    // get all the decorations
    db.Decor.findAll({}).then(function(results) {
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
=======
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

/*
  app.get("/api/authors/:id", function(req, res) {
    // include all of the Author's Posts here
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
*/
};
