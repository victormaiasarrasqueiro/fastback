const Joi = require('joi');
const RouteValidator = require('../middlewares/RouteValidator');

class LogValidate extends RouteValidator {

  static get post() {
    const schema = {
        project: Joi.string().trim().required().max(100).min(2),
        local: Joi.string().trim().required().max(100).min(2),
        message: Joi.string().trim().required().max(500).min(2),
        stack: Joi.string().trim().required().max(100000).min(5),
        obj: Joi.string().trim().max(10000).min(5),
        priority: Joi.number().required().max(4).min(0),
    };

    return this.validate(schema);
  }

}

module.exports = LogValidate;