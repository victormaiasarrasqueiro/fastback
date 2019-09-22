
const moment = require('moment');
const UserService = require('../services/UserService');

class PasswordRecoveryController {

  static async post(req, res) {
    
    try {

        const obj = {
            email: req.body.email.trim(),
        };

        const retorno = await UserService.passwordRecovery(obj);

        res.status(201);
        res.send({ user: user });

        return;
    } catch (e) {
        res.status(400);
        res.send("INTERNAL SERVER ERROR: " + e);
        return;
    }

  }

}

module.exports = PasswordRecoveryController;
