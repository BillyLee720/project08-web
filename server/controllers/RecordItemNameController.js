const { User } = require('../models/User');
const { Weight } = require('../models/Weight');

module.exports = {
  async getData(req, res) {
    try {
      const Id = req.body.userid;
      console.log('userId:', Id); // 除錯訊息
      const user = await User.findByPk(Id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const weights = await Weight.findAll({ where: { userid: Id } });

      const weightArray = weights.map((weight) => weight.weight);
      console.log('weightArray:', weightArray); // 除錯訊息
      res.send({ weight: weightArray });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
