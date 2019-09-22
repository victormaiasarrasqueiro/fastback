const UserRepository = require('../repository/UserRepository');

class TokenService {

  static async post(obj) {

    const userFound = await UserRepository.getByEmail(obj.email);

    if(userFound){
      
      if(userFound.password === obj.password){
        return { success: true , userFound: true, user:userFound, passwordValid: true, token: "KKoklleed8e0c89eue0c9euc09ec0ewuc" };
      }else{
        return { success: false , userFound: true, user:null, passwordValid: false, token: null };
      }

    }else{
      return { success: false , userFound: false, user:null, passwordValid: null, token: null };
    }

    return ;

  }
}

module.exports = TokenService;