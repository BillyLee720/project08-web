const fs = require('fs');
const path = require('path');

const db = require('../util/database');

const sequelize = new Sequelize(config.db.database);
module.exports = db;
