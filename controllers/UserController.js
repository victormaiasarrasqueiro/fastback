
const moment = require('moment');
const UserService = require('../services/UserService');
const LogUtil = require('../util/LogUtil');

class UserController {

  static async post(req, res) {
    
    try {

        const obj = {
            name: req.body.name.trim(),
            surname: req.body.surname.trim(),
            email: req.body.email.trim(),
            password: req.body.password.trim(),
            passwordTemp: false,
        };

        const result = await UserService.insert(obj);

        res.status(201);
        res.send(result);

        return;
    } catch (e) {
        LogUtil.log("UserController","post",e.message, " [ENTRADA]: " + JSON.stringify(req.body) + " - STACK: " +  e.stack,0);
        res.status(500);
        res.send("INTERNAL SERVER ERROR: " + e.message);
        return;
    }

  }

}

module.exports = UserController;
