// var express = require('express');
// var router = express.Router();
// var users = require('./api/users');
// const pool = require('../util/database');
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.send('users首頁');
// });

// // router.route('/login');
module.exports = (app) => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post('/login', AuthenticationController.login);
};
// // router.use('/users', users);

// module.exports = router;

// module.exports = (app) => {
//   app.post('/register', (req, res) => {
//     res.send({
//       mes,
//     });
//   });
// };
