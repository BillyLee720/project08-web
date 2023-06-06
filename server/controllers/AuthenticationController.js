const { User, hashPassword, decryptPassword } = require('../models/User');
const jwt = require('jsonwebtoken');
const sequelize = require('../models/index');
const nodemailer = require('nodemailer');
const { func } = require('joi');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, process.env.JWT_SECRET || 'secret', {
    expiresIn: ONE_WEEK,
  });
}
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '209410256@gms.tku.edu.tw',
    pass: 'asdf74152',
  },
});

async function sendResetPasswordEmail(email) {
  console.log(email);
  const resetPasswordLink = generateResetPasswordLink(email);
  const mailOptions = {
    from: '209410256@gms.tku.edu.tw',
    to: email,
    subject: '重製密碼',
    text: `請點擊以下網址重製你的密碼: ${resetPasswordLink}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('重置密碼郵件已發送');
  } catch (error) {
    console.error('發送重置密碼郵件時出錯:', error);
  }
}

function generateResetPasswordLink(email) {
  const resetPasswordLink = `http://localhost:8080/reset-password?email=${encodeURIComponent(
    email
  )}`;
  return resetPasswordLink;
}

module.exports = {
  async register(req, res) {
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
      const userObj = user.toJSON();
      console.log(userObj);
      res.send(userObj);
    } catch (err) {
      console.log(err);
    }
  },
  async updateUser(req, res) {
    try {
      const { email, username, phone, height, gender, birth } = req.body;
      // console.log(email);
      const user = await User.findOne({ where: { email: email } });
      user.username = username;
      user.phone = phone;
      user.height = height;
      user.gender = gender;
      user.birth = birth;
      await user.save();
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  },
  async changePassword(req, res) {
    const { userId, currentPassword, newPassword } = req.body;
    console.log(userId);
    try {
      const user = await User.findByPk(userId);
      const isPasswordCorrect = await user.comparePassword(currentPassword);
      if (!isPasswordCorrect) {
        return res.status(401).json({ error: '當前密碼不正確' });
      }
      user.password = newPassword;
      await hashPassword(user);
      await user.save();
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  },
  async forgotPassword(req, res) {
    const { email } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: '用戶不存在' });
      }
      console.log(user.userid);
      await sendResetPasswordEmail(email);
      res.status(200).json({ message: '重製密碼郵件已發送!' });
    } catch (err) {
      console.log(err);
    }
  },
  async resetPassword(req, res) {
    const { email, newPassword, confirmPassword } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (newPassword != confirmPassword) {
        return res.status(401).json({ error: '兩組密碼不相符' });
      }
      console.log('originPassword', user.password);
      user.password = newPassword;
      await hashPassword(user);
      await user.save();
      res.send(user);
      console.log(newPassword);
    } catch (err) {
      console.log(err);
    }
  },
};
