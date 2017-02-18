

var user_controller = {
    isAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    },
    destroySession: function(req, res, next) {
        req.logOut();
        req.session.destroy();
        res.redirect('/login');
    }
}
module.exports = user_controller;
