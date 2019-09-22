
const LogUtil = require('../util/LogUtil');
const UserModel = require('../model/UserModel');

class UserRepository {
    
    constructor() {
        this.userModel = UserModel;
    }

    /**
     * INSERT
     * @param {*} obj 
     */
    async insert(obj) {
        try {
            
            const model = new this.userModel(obj);
            const validate = model.validateSync();
            
            if (!validate) {
                return await model.save();
            }else{
                LogUtil.log("UserRepository","insert","ERRO_VALIDACAO_MONGO"," [ENTRADA]: " + JSON.stringify(obj) + " - STACK: " +  "null",1);
            }

        } catch (e) {
            LogUtil.log("UserRepository","insert",e.message," [ENTRADA]: " + JSON.stringify(obj) + " - STACK: " +  e.stack,0);
            throw e;
        }
    }

    /**
     * GET BY EMAIL
     */
    async getByEmail(pEmail) {
        try {
            return await this.userModel.findOne({ email: pEmail }).exec();
        } catch (e) {
            LogUtil.log("UserRepository","getByEmail",e.message," [ENTRADA]: " + JSON.stringify(pEmail) + " - STACK: " +  e.stack,0);
            throw e;
        }
    }

}

module.exports = new UserRepository();
