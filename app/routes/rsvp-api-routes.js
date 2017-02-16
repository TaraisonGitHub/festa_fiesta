var db = require("../models");

module.exports = function(app) {
  app.get("/api/rsvp", function(req, res) {
    db.Guest.findAll({
      //include: [db.Food]
    }).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });

  app.get("/api/rsvp/:id", function(req, res) {
    db.Guest.findOne({
      where: {
        id: req.params.id
      },
      //include: [db.Food]
    }).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });

  app.post("/api/rsvp", function(req, res) {
    db.Guest.create(req.body).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });

  app.delete("/api/rsvp/:id", function(req, res) {
    db.Guest.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });

};