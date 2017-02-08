module.exports = function(sequelize, DataTypes) {
  var Playlist = sequelize.define("Playlist", {
    name: DataTypes.STRING
  });
  return Playlist;
};
