module.exports = function(sequelize, DataTypes) {
  var Rsvp = sequelize.define("Rsvp", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      default: 0
    },
    attending: {
      type: DataTypes.BOOLEAN,
      default: 0
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
  return Rsvp;
};