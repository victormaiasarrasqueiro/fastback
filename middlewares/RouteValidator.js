const Joi = require('joi');

class RouteValidator {

  static validate(schema) {
    return this._validate.bind(schema);
  }

  static _validate(req, res, next) {
    const data = {};
    const schema = this;

    Object.keys(schema).map((k) => {
      data[k] = req.body[k];
      return k;
    });
    
    const validation = Joi.validate(data, schema, {
      allowUnknown: true,
    });

    if (!validation.error) {
      next();
    } else {
      res.status(400).send({
        success: false,
        messages: validation.error.details,
      });
    }
  }
}

module.exports = RouteValidator;
