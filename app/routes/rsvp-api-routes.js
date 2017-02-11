<<<<<<< HEAD
var dbFour = require("../models");
=======
var db = require("../models");
>>>>>>> master


// Skeleton of route assumes that the "rsvp" model is linked to the party database
module.exports = function(app) {
  app.get("/api/rsvp", function(req, res) {
    // get all the rsvps
<<<<<<< HEAD
    dbTwo.decorations.findAll({}).then(function(results) {
=======
    db.Guest.findAll({}).then(function(results) {
>>>>>>> master
      res.json(results);
    });
  });

<<<<<<< HEAD

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
    // create all the rsvps
app.post("/api/rsvps", function(req, res) {
    db.Guest.create(req.body).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });

    // delete all the rsvps
app.delete("/api/rsvps/:id", function(req, res) {
    db.Guest.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });
/*
  app.get("/api/authors/:id", function(req, res) {
    // include all of the Author's Posts here
    db.Author.findOne({
>>>>>>> master
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
*/
};
