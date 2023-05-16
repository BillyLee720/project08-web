const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Promise = require('bluebird');
const CryptoJS = require('crypto-js');
const { Weight } = require('./Weight');
const { FoodDate } = require('./FoodDate');
const { RecordDate } = require('./RecordDate');
const { Food } = require('./Food');
const { RecordItem } = require('./recorditem');
const { RecordItemName } = require('./RecordItemName');

async function hashPassword(user, options) {
  // const secretKey = 'TestGym';
  if (typeof user.password !== 'string') {
    return Promise.reject(new Error('Invalid password'));
  }
  if (user.changed('password')) {
    const ciphertext = await CryptoJS.AES.encrypt(
      user.password,
      process.env.secretKey
    );
    user.password = ciphertext.toString();
  } else {
    return;
  }
  console.log('user.password:', user.password);
}

function decryptPassword(ciphertext) {
  // const secretKey = 'TestGym';
  const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.secretKey);
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
/* Food */
User.hasMany(FoodDate, {
  foreignKey: 'userid',
});
FoodDate.belongsTo(User, {
  foreignKey: 'userid',
});
FoodDate.hasMany(Food, {
  foreignKey: 'fid',
});
Food.belongsTo(FoodDate, {
  foreignKey: 'fid',
});
/* Weight */
User.hasMany(Weight, {
  foreignKey: 'userid',
});
Weight.belongsTo(User, {
  foreignKey: 'userid',
});
/* Record */
User.hasMany(RecordDate, {
  foreignKey: 'userid',
});
RecordDate.belongsTo(User, {
  foreignKey: 'userid',
});
RecordDate.hasMany(RecordItem, {
  foreignKey: 'sid',
});
RecordItem.belongsTo(RecordDate, {
  foreignKey: 'sid',
});
RecordItem.hasMany(RecordItemName, {
  foreignKey: 'nid',
});
RecordItemName.belongsTo(RecordItem, {
  foreignKey: 'nid',
});

User.prototype.comparePassword = async function (password) {
  return comparePassword(password, this.password);
};
module.exports = { User, hashPassword, decryptPassword };
