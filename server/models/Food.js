const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Food = sequelize.define('food', {
  userid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  date: {
    type: DataTypes.STRING,
  },
  time: DataTypes.STRING,
  fid: {
    type: DataTypes.STRING,
  },
  birth: DataTypes.STRING,
  gender: DataTypes.CHAR,
  phone: DataTypes.STRING,
});

module.exports = { Food };
