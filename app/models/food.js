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
  }
    // {
//       // We're saying that we want our Guest to bring Food
//       classMethods: {
//         associate: function(models) {
//           // A Guest (foreignKey) is required or Food can't be made
//           Food.belongsTo(models.Guest, {
//             foreignKey: {
//               allowNull: false
//             }
//           });
//         }
//       }
//     }
  );
  return Food;
};