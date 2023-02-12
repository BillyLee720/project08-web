var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/usersController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('users首頁');
});

// router.post('/signin', (req, res) => {
//   res.send('singIn頁');
// });

router.post('/signin', userCtrl.userCtrlSignin);

module.exports = router;
