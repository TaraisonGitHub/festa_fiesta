'use strict';

module.exports = function (sequelize, DataTypes) {
    var Guest = sequelize.define('guest', {
            inviteCode: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            }
        }
        // ,
        // {
        //     classMethods: {
        //         associate: function (models) {
        //                onDelete: "cascade"
        //            }
        //         }
        //     }
    );
    return Guest;
};
