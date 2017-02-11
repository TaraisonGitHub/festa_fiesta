module.exports = function(sequelize, DataTypes) {
  var Decor = sequelize.define("decor", {
    decorations: {
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
    cost: {
<<<<<<< HEAD
      type: DataTypes.INTEGER,
=======
      type: DataTypes.INT,
>>>>>>> master
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  }
  );
  return Decor;
};