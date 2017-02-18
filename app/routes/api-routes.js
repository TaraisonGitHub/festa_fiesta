//var userController = require('../controllers/user_controller.js');
var db = require('../models');
var flash = require('flash');
module.exports = function(app, passport) {

    app.post('/authenticate', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

    app.post('/register', function (req, res) {
        console.log('API-ROUTES: User details submitted ' + req.body.username);

        db.user.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
            .then(function(m){
                console.log(m.null);
            })
            .catch(db.Sequelize.ValidationError, function(error) {
            console.log(error);
        });
    });


}
