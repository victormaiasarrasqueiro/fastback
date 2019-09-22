const Joi = require('joi');
const RouteValidator = require('../middlewares/RouteValidator');

class PasswordRecoveryValidate extends RouteValidator {

  static get post() {
    const schema = {
      params: Joi.object().keys({
        email: Joi.string().required().email(),
      }),
    };

    return this.validate(schema);
  }

}

module.exports = PasswordRecoveryValidate;