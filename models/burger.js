
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date_devoured: DataTypes.DATE
  },
  {timestamps: false  
    });
  return Burgers;
};