
const moment = require('moment');
const LogUtil = require('../util/LogUtil');
const TokenService = require('../services/TokenService');

class TokenController {

  static async post(req, res) {
    
    try {
        const now = moment().format('YYYY-MM-DD H:mm:ss');

        const obj = {
            email: req.body.email.trim(),
            password: req.body.password.trim(),
        };

        if (obj.email && obj.password) {
            
            const result = await TokenService.post(obj);

            res.status(201);
            res.send(result);

        } else {
            res.status(422).send('Internal Error');
        }

        return;
    } catch (e) {
        LogUtil.log("TokenController","post",e.message, " [ENTRADA]: " + JSON.stringify(req.body) + " - STACK: " +  e.stack,0);
        res.status(500);
        res.send("INTERNAL SERVER ERROR: " + e);
        return;
    }

  }

}

module.exports = TokenController;
