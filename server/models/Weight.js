const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { User } = require('./User');

const Weight = sequelize.define('weight&height', {
  wid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  userid: {
    type: DataTypes.INTEGER,
  },
  weight: DataTypes.DOUBLE,
  unit: DataTypes.STRING,
  date: {
    type: DataTypes.STRING,
  },
});

module.exports = { Weight };
