const {User} = require ('../models/User');
const {Weight} = require ('../models/Weight');

module.exports = {
    async getData (req,res) {
        try {
            const userId = req.params.id;
            const user = await User.findOne({ where: { id: userId } });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            const weight = await Weight.findAll({ where: { userId: userId } });
            const bmiData = weight.map(weight => {
                const bmi = weight.weight / Math.pow(user.height / 100, 2);
                return { date: weight.date, bmi: bmi };
              });
        }
        catch(err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

