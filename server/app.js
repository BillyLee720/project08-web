var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/users');
const sequelize = require('./models/index');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/users', usersRouter);
app.get('/status', (req, res) => {
  res.send({
    message: 'hello',
  });
});
// app.post('/register', (req, res) => {
//   res.send({
//     message: `hello ${req.body.email}! your user was registered! have fun!`,
//   });
// });

// const users = require('./routes/api/users');
// app.use('/api/users', users);
require('./routes/index')(app);
// app.get('/', function (req, res) {
//   res.set('Access-Control-Allow-Origin: *');
//   res.end('hello world');
// });
// app.use(cors());
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
