const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./User');

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

FoodDate.belongsTo(User, { foreignKey: 'userid' });

module.exports = { FoodDate };
