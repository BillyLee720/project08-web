const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('user', {
  userid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  username: {
    type: DataTypes.STRING,
  },
  birth: DataTypes.STRING,
  gender: DataTypes.CHAR,
  phone: DataTypes.STRING,
});

module.exports = { User };
