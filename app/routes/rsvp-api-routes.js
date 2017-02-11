
var db = require("../models");

// Skeleton of route assumes that the "rsvp" model is linked to the party database
module.exports = function(app) {
  app.get("/api/rsvp", function(req, res) {
    // get all the rsvps
    db.Guest.findAll({}).then(function(results) {

      res.json(results);
    });
  });