const UserRepository = require('../repository/UserRepository');
const LogUtil = require('../util/LogUtil');
const CryptoUtil = require('../util/CryptoUtil');
const EmailUtil = require('../util/EmailUtil');

class UserService {

  /**
   * Insert a new user 
   * @param {*} obj 
   */
  static async insert(obj) {

    try {
      
      const userFound = await UserRepository.getByEmail(obj.email);
      
      if(userFound){
        return { success: false , userFound: true };
      }
      
      const passwordCrypt = CryptoUtil.encrypt(obj.password);
      obj.password = passwordCrypt;

      obj.passwordTemp = false;
      obj.perfil = "USER_ADMIN"

      const userInserted = await UserRepository.insert(obj);
      userInserted.password = null;

      EmailUtil.sendEmailNewUser(userInserted);

      return { success: true , userInserted: userInserted }
      
    } catch (e) {
      LogUtil.log("UserService","insert",e.message," [ENTRADA]: " + JSON.stringify(obj) + " - STACK: " +  e.stack,0);
      throw e;
    }

  }

  /**
   * Insert a new user 
   * @param {*} obj 
   */
  static async passwordRecovery(obj) {
    
    try {
      
      const userFound = await UserRepository.getByEmail(obj.email);

      const passwordTemp = CryptoUtil.encrypt(obj.email);

      return { success: true , emailRecovery: userFound.email, newPassword: passwordTemp }
      
    } catch (e) {
      LogUtil.log("UserService","passwordRecovery",e.message," [ENTRADA]: " + JSON.stringify(obj) + " - STACK: " +  e.stack,0);
      throw e;
    }

  }

}

module.exports = UserService;