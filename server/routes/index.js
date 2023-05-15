var express = require('express');

const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post('/login', AuthenticationController.login);
  app.get('/user/:id', AuthenticationController.getUser);
  app.patch('/user', AuthenticationController.updateUser);
  app.get('/user/:id', AuthenticationController.getData);
};
