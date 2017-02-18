module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("rsvp", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    classMethods: {
      associate: function(models) {
        Guest.hasMany(models.Food, {
          onDelete: "cascade"
        });
      }
    }
  });
  return Guest;
};