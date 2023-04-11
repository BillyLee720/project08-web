const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Weight = sequelize.define('weight&height', {
  userid: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  wid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  date: {
    type: DataTypes.STRING,
  },
});

module.exports = { Food };
