const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,16}$')),
      username: Joi.string(),
    });
    const validation = schema.validate(req.body);

    if (validation.error) {
      switch (validation.error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address',
          });
          break;
        case 'password':
          res.status(400).send({
            error: 'The password provided failed to match the following rules',
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information',
          });
          console.log(validation.error);
      }
    } else {
      next();
    }
  },
};
