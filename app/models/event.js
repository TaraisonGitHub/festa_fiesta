'use strict';

module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('event', {
            myevent: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                len: [1]
            },
            time: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                len: [1]
            },
            location: {
                type: DataTypes.TEXT,
                allowNull: false,
                len: [1]
            }
        }
        ,
        {
            classMethods: {
                associate: function (models) {
                    onDelete: "cascade"
                }
            }
        }
    );
    return Event;
};
