// Dependencies
// =============================================================
var path = require("path");
var user_controller = require('../controllers/user_controller');

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", user_controller.isAuthenticated, function (req, res) {
        res.redirect('/index.html', {name: req.user.username});
    });

    app.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname + "/../../www/login.html"));
    });

    // index route loads signup.html
    app.get('/signup', function (req, res) {
        res.sendFile(path.join(__dirname + "/../../www/signup.html"));
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

};
