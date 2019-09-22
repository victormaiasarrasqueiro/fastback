const Joi = require('joi');
const RouteValidator = require('../middlewares/RouteValidator');

class UserValidate extends RouteValidator {

  static get post() {
    const schema = {
        name: Joi.string().trim().required().max(100).min(2),
        surname: Joi.string().trim().required().max(100).min(2),
        email: Joi.string().trim().required().max(100).min(5).email(),
        password: Joi.string().trim().required().max(20).min(5),
    };

    return this.validate(schema);
  }

}

module.exports = UserValidate;