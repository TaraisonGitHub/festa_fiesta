module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("rsvp", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  }
  );
  return Guest;
};