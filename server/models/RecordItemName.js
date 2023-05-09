const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { RecordItem } = require('./recorditem');

const RecordItemName = sequelize.define('recorditemNamename', {
  lid: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: false,
  },
  nid: DataTypes.INTEGER,
  itemname: DataTypes.STRING,
  sets: DataTypes.SMALLINT,
  reps: DataTypes.SMALLINT,
  itemweight: DataTypes.DOUBLE,
  unit: DataTypes.STRING,
});

RecordItemName.belongsTo(RecordItem, {
  foreignKey: 'nid',
});
module.exports = { RecordItemName };
