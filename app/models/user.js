module.exports = function(sequelize, DataTypes) {

var User = sequelize.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
            }
        },
    });
    return User;
}
