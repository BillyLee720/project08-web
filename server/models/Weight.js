const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Weight = sequelize.define('weight&height', {
  userid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  wid: {},
});

module.exports = { Food };
