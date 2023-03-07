module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    // user: 'postgres',
    // host: 'localhost',
    // database: 'gym',
    // password: '0000',
    // port: '5432',

    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.splite',
    },
  },
};
