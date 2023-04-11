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
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      // console.log(err);
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
      // const isPasswordValid = password === user.password;
      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
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
  async getUser(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).send({
          error: 'User not found',
        });
      }
      res.send(user.toJSON());
    } catch (err) {
      console.log(err);
    }
  },
  async updateUser(req, res) {
    try {
      const { email } = req.body;
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(404).send('User not found');
      }
      user.username = req.body.username;
      user.password = req.body.password;
      user.phone = req.body.phone;
      user.height = req.body.height;
      await user.save();
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  },
};
