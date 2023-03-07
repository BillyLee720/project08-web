const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gym',
  password: '0000',
  port: '5432',
});

// pool.query('SELECT * from test', (err, res) => {
//   console.log(JSON.stringify(res.rows));
//   pool.end();
// });
module.exports = pool;
