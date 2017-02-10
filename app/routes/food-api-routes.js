// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all food
  app.get("/api/food", function(req, res) {
    var query = {};
    if (req.query.guest_id) {
      query.GuestId = req.query.guest_id;
    }
    db.Food.findAll({
      where: query,
      include: [db.Guest]
    }).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Get route for retrieving a single food item
  app.get("/api/food/:id", function(req, res) {
    db.Food.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Guest]
    }).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // POST route for saving new food
  app.post("/api/food", function(req, res) {
    db.Food.create(req.body).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // DELETE route for deleting food
  app.delete("/api/Food/:id", function(req, res) {
    db.Food.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // PUT route for updating food
  app.put("/api/food", function(req, res) {
    db.Food.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbFood) {
        res.json(dbFood);
      });
  });
};
