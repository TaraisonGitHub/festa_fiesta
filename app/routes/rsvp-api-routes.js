var db = require("../models");


// Skeleton of route assumes that the "rsvp" model is linked to the party database
module.exports = function(app) {
  app.get("/api/rsvp", function(req, res) {
    // get all the rsvps

    db.Guest.findAll({}).then(function(results) {
      res.json(results);
    });
  });


/*
    // create all the rsvps
app.post("/api/rsvp", function(req, res) {
    db.Guest.create(req.body).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });

    // delete all the rsvps
app.delete("/api/rsvp/:id", function(req, res) {
    db.Guest.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });
  */
