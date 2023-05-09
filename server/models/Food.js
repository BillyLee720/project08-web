const { DataTypes } = require('sequelize');
const { FoodDate } = require('./FoodDate');
const sequelize = require('./index');
const { RecordItem } = require('./recorditem');

const Food = sequelize.define('food', {
  hid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  fid: {
    type: DataTypes.INTEGER,
  },
  foodname: DataTypes.STRING,
  calories: DataTypes.SMALLINT,
  carbohydrate: DataTypes.SMALLINT,
  fat: DataTypes.SMALLINT,
  protein: DataTypes.SMALLINT,
  perpack: DataTypes.SMALLINT,
  size: DataTypes.INTEGER,
  unit: DataTypes.STRING,
});
Food.belongsTo(FoodDate, {
  foreignKey: 'fid',
});

module.exports = { Food };
