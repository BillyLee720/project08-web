const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const RecordItem = sequelize.define('recorditem', {
  nid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  sid: DataTypes.INTEGER,
  item: DataTypes.STRING,
});

module.exports = { RecordItem };
