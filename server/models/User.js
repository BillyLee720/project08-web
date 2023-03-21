const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Promise = require('bluebird');
const bcrypt = require('bcryptjs');

async function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  // console.log(hashPassword);
  if (typeof user.password !== 'string') {
    return Promise.reject(new Error('Invalid password'));
  }

  if (user.changed('password')) {
    const salt = await bcrypt.genSalt(SALT_FACTOR);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } else {
    return;
  }
  console.log(user.password);
}

const User = sequelize.define(
  'user',
  {
    userid: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: false,
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
      beforeCreate: async (user, options) => {
        if (!user.userid) {
          const maxUserId = await User.max('userid');
          user.userid = (maxUserId || 0) + 1;
        }
        return hashPassword(user, options);
      },
      beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
  }
);

User.prototype.comparePassword = async function (password) {
  console.log('comparePassword function called');
  console.log('password:', password);
  console.log('hashed password:', this.password);
  const isMatch = await bcrypt.compare(password, this.password);
  console.log('isMatch:', isMatch);
  return isMatch;
};
module.exports = { User };
