const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { RecordDate } = require('./RecordDate');
const { RecordItemName } = require('./RecordItemName');

const RecordItem = sequelize.define('recorditem', {
  nid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  sid: DataTypes.INTEGER,
  item: DataTypes.STRING,
});

RecordItem.belongsTo(RecordDate, {
  foreignKey: 'sid',
});
RecordItem.hasMany(RecordItemName, {
  foreignKey: 'nid',
});
module.exports = { RecordItem };
