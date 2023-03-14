const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcryptjs'));

function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  console.log('hashPassword');
  if (typeof user.password !== 'string') {
    return Promise.reject(new Error('Invalid password'));
  }

  if (!user.changed('password')) {
    return;
  }
  console.log(user.password);
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then((salt) => bcrypt.hashAsync(user.password, salt, null))
    .then((hash) => {
      user.setDataValue('password', hash);
    });
}

const User = sequelize.define(
  'user',
  {
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
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
  }
);

User.prototype.comparePassword = function (password) {
  return bcrypt.compareAsync(password, this.password);
};

module.exports = { User };
