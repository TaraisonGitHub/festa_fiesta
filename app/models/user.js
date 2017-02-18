//Bcrypt for password encryption
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const SALT_WORK_FACTOR = 12;

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        classMethods: {
            validPassword: function (candidatePassword, callback) {
                bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
                    console.log(err);
                    if (err) {
                        throw err;
                    }
                    callback(null, isMatch);
                });
            }
        },
        hooks: {
            beforeCreate: function (user, options) {
                const SALT_FACTOR = 5;

                if (!user.changed('password')) {
                    return sequelize.Promise.reject("not modified");
                }

                return bcrypt.genSaltAsync(SALT_FACTOR).then(function(salt) {
                    return bcrypt.hashAsync(user.password, salt, null);
                }).then(function(hash) {
                    user.setDataValue('password', hash);
                }).catch(function(err) {
                    return sequelize.Promise.reject(err);
                });
            }
        }
    }, {
            dialect: 'mysql'
        }

);

    return User;
};
