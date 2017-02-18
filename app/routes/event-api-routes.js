var db = require("../../../../../Downloads/festa_fiesta/app/models/index");

module.exports = function(app) {
  app.get("/api/event", function(req, res) {
    db.Event.findAll({
      //include: [db.Event]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/event/:id", function(req, res) {
    db.Event.findOne({
      where: {
        id: req.params.id
      },
      //include: [db.Event]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.post("/api/event", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.delete("/api/event/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

};