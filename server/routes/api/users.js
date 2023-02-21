var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../models/User');

/**步驟
 * @route Post api/users/register
 * @desc Register the user
 * @access Public
 */

router.post('/register', (req, res) => {
  let { name, username, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({
      msg: 'Password do not match.',
    });
  }
  // Check for the unique Username
  User.findOne({ username: username }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: 'Username is already taken.',
      });
    }
  });
  // Check for the unique Email
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: 'Email is already registered.',
      });
    }
  });
  // The data is valid and new we can register the user
  let newUser = new User({
    name,
    username,
    password,
    email,
  });
  // Hash the password
  bcrypt.getSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json({
          success: true,
          msg: 'User is now registered.',
        });
      });
    });
  });
});

module.exports = router;
