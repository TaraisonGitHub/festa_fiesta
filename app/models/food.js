module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("food", {
    food: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    cost: {
      type: DataTypes.INTEGER
    }
});
  return Food;
};
