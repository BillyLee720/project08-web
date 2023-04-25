const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Food = sequelize.define('food', {
  nid: {
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

module.exports = { Food };
