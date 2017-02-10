module.exports = function(sequelize, DataTypes) {
  var Games = sequelize.define("Games", {
    game: {
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
  return Games;
};