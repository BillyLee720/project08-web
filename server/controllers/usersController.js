var userModule = require('../modules/usersModule');
// var User = require('../models/User');

const userCtrlSignin = (req, res) => {
  // res.send('signin頁');
  userModule
    .userModuleSignig(req.body)
    .then((moduleResult) => {
      res.send(Object.assign({ success: true }, moduleResult));
    })
    .catch((error) => {
      res.send(Object.assign({ success: false }, error));
    });
};

module.exports = {
  userCtrlSignin,
};
