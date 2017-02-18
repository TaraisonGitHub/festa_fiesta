var db = require("../../../../../Downloads/festa_fiesta/app/models/index");

module.exports = function(app) {
  app.get("/api/event", function(req, res) {
    db.Guest.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('inviteCode')), 'attendees']]
});

  app.post("/api/login", function(req, res) {
    db.Guest.create(req.body).then(function(dbGuest) {
      res.json(dbGuest);
    });
  });

});

};