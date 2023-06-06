const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { RecordItem } = require('./recorditem');
const User = require('./User');

const RecordDate = sequelize.define(
  'recorddate',
  {
    sid: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: false,
    },
    userid: DataTypes.INTEGER,
    date: DataTypes.DATE,
  },
  {
    tableName: 'RecordDate',
    timestamps: false,
  }
);

module.exports = { RecordDate };
