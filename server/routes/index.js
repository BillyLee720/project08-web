var express = require('express');
const app = express();
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
// // router.route('/login');
module.exports = (app) => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post('/login', AuthenticationController.login);
  app.get('/user/:id', AuthenticationController.getUser);
  app.patch('/api/user', AuthenticationController.updateUser);
};
