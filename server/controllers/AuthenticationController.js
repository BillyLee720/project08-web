const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
const sequelize = require('../models/index');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, process.env.JWT_SECRET || 'secret', {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    const password = req.body.password;
    console.log(password);
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: 'This email account is already in use.',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        console.log('user not found');
        return res.status(403).send({
          error: 'user not found',
        });
      }
      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        console.log(password, user.password, isPasswordValid, user);

        console.log('Incorrect password');
        return res.status(403).send({
          error: 'Incorrect password',
        });
      }
      const userJson = user.toJSON();
      res.send({ user: userJson, token: jwtSignUser(userJson) });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occured trying to log in',
      });
    }
  },
};
