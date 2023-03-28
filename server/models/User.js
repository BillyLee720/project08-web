const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Promise = require('bluebird');
const CryptoJS = require('crypto-js');

async function hashPassword(user, options) {
  const secretKey = 'TestGym';
  if (typeof user.password !== 'string') {
    return Promise.reject(new Error('Invalid password'));
  }
  if (user.changed('password')) {
    const ciphertext = await CryptoJS.AES.encrypt(user.password, secretKey);
    user.password = ciphertext.toString();
  } else {
    return;
  }
  console.log('user.password:', user.password);
}

function decryptPassword(ciphertext) {
  const secretKey = 'TestGym';
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  return originalPassword;
}

function comparePassword(password, hashedPassword) {
  const originalPassword = decryptPassword(hashedPassword);
  console.log('password:', password);
  console.log('hashed password:', hashedPassword);
  console.log('originPassword:', originalPassword);
  const isMatch = password === originalPassword;
  return isMatch;
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
    },
  }
);

User.prototype.comparePassword = async function (password) {
  return comparePassword(password, this.password);
};
module.exports = { User };
