var express = require('express');

const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const RecordItemNameController = require('../controllers/RecordItemNameController');

module.exports = (app) => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post('/login', AuthenticationController.login);
  app.patch('/user', AuthenticationController.updateUser);
  app.get('/user/:id', AuthenticationController.getUser);
  app.get('/user/:id/bmi', RecordItemNameController.getData);
  app.patch('/user/password', AuthenticationController.changePassword);
  app.post('/forgotpassword', AuthenticationController.forgotPassword);
  app.patch('/reset-password', AuthenticationController.resetPassword);
};
