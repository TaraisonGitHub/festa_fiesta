//Dependencies
//================================
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

//Serialize sessions to cookie
passport.serializeUser(function(user, done) {
    done(null, user);
});


//Deserialize sessions
passport.deserializeUser(function(id, done) {
    db.user.findOne({
        where: {
            id: id
        }
    }).then(function (user) {
        if (user == null) {
            done(new Error('Wrong user id.'))
        }
        done(null, user)
    })
});

//Authenticate user
// passport.use('local',new LocalStrategy(
//     function(username, password, done) {
//         db.user.findOne({
//             where: {
//                 username: username
//             }}).
//         then(function(user) {
//             passwd = user ? user.password : isMatch = db.user.validPassword(password, passwd, done, user);
//         });
//     }
// ));

// For Authentication Purposes
// passport.use('local',new LocalStrategy(
//     function(username, password, done){
//         db.user.findOne({where: {username: username}}).then(function(user){
//             // passwd = user ? user.password : ''
//             // isMatch = db.user.validPassword(password, passwd, done, user)
//             var pass = user.password;
//             passwd = db.user.validPassword(pass,passwd,done, user);
//             if(pass === hash) {
//                 return true;
//                 next();
//             }
//         });
//     }
// ));

passport.use('local', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    function (username, password, done) {
        db.user.findOne({email: username}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            if (!user.validPassword(password)) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, user);
        });
    }
));

