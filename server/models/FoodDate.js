const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./User');
const Food = require('./Food');

const FoodDate = sequelize.define('fooddate', {
  fid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  userid: DataTypes.INTEGER,
  date: DataTypes.DATE,
  time: DataTypes.TIME,
});

// FoodDate.belongsTo(User, {
//   foreignKey: 'userid',
// });
// FoodDate.hasMany(Food, {
//   foreignKey: 'fid',
// });
module.exports = { FoodDate };
