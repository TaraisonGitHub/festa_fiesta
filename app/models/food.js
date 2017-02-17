module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("food", {
    food: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },
    {
      classMethods: {
        associate: function(models) {
          Food.belongsTo(models.Guest, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Food;
};