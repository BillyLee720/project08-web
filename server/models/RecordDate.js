const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const RecordDate = sequelize.define('recorddate', {
  sid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  userid: DataTypes.INTEGER,
  date: DataTypes.DATE,
});

module.exports = { RecordDate };
