const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: '209410751',
  port: '5432',
});

pool.query('SELECT * from test', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
});

/* Mongodb */
const mongodb = {
  HOST: 'localhost',
  PORT: 27017,
  DATABASE: 'database',
};

module.exports = {
  mongodb,
};
