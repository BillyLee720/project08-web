const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
// local
// const sequelize = new Sequelize('gym', 'postgres', '0000', {
//   host: 'localhost',
//   dialect: 'postgres',
//   dialectOptions: {
//     // ssl: process.env.DATABASE_URL ? true : false,
//     pool: {
//       max: 5, // 最大连接数
//       min: 0, // 最小连接数
//       acquire: 30000, // 连接超时时间（ms）
//       idle: 10000, // 连接空闲时间（ms）
//     },
//   },
//   define: {
//     freezeTableName: true,
//   },
//   // authentication: {
//   //   jwtSecret: process.env.JWT_SECRET || 'secret',
//   // },
// });

// url

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

module.exports = sequelize;
