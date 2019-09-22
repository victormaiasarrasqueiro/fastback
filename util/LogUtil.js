
const LogService = require('../services/LogService');

class LogUtil {
    
    constructor() {
        this.service = LogService;
    }

    /**
     * GET BY EMAIL
     */
    async log(nameClass,method,message,stack,priority) {
        try {

            const obj = {
                
                "project":"FastBack",
                "local": "[" + nameClass + "-" +  method + "]",
                "message":message,
                "stack":stack,
                "priority": priority,
            };

            LogService.insert(obj);

            return;

        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = new LogUtil();
