var db = require('../models');
module.exports = function(app) {

    //when a user posts registration information
    app.post('/api/register', function(req, res) {
        console.log('\nReceiving user data: ' + req.body.user);
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });
}
