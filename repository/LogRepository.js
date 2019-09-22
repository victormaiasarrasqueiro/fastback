
const LogModel = require('../model/LogModel');

class LogRepository {
    
    constructor() {
        this.model = LogModel;
    }

    /**
     * INSERT
     * @param {*} obj 
     */
    async insert(obj) {
        try {
            
            const model = new this.model(obj);
            const validate = model.validateSync();
            
            if (!validate) {
                model.save();
            }else{
                console.log(validate.errors);
            }
            
            return;

        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async list() {
        try {
          return await this.model.find().exec();
        } catch (e) {
          console.log(e);
          throw e;
        }
      }

}

module.exports = new LogRepository();
