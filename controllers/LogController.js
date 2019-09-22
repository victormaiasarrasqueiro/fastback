
const moment = require('moment');
const LogService = require('../services/LogService');

class LogController {

  static async post(req, res) {
    
    try {

        const obj = {
            project: req.body.project.trim(),
            local: req.body.local.trim(),
            message: req.body.message.trim(),
            stack: req.body.stack.trim(),
            priority: req.body.priority,
        };

        const retorno = LogService.insert(obj);

        res.status(201);
        res.send({ success: true });

        return;
    } catch (e) {
        res.status(400);
        res.send("INTERNAL SERVER ERROR: " + e);
        return;
    }

  }

  static async get(req, res) {
    
    try {

        const retorno = LogService.list();

        res.status(200);
        res.send(retorno);

        return;
    } catch (e) {
        res.status(400);
        res.send("INTERNAL SERVER ERROR: " + e);
        return;
    }

  }

}

module.exports = LogController;
