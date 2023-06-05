const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { User } = require('./User');

const Weight = sequelize.define(
  'WeightHeight',
  {
    wid: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
    weight: DataTypes.DOUBLE,
    unit: DataTypes.STRING,
    date: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Weight',
  }
);

module.exports = { Weight };
