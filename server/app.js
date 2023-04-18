var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
const sequelize = require('./models/index');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // 將此處替換為您的客戶端應用程式的域名
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use('/api', indexRouter);

require('./routes/index')(app);
app.use(
  cors({
    origin: ['http://localhost:8080'],
  })
);
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8081, () => {
    console.log(`Server running on port ${process.env.PORT || 8081}`);
  });
});

module.exports = app;
