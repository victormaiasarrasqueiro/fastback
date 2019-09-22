const LogRepository = require('../repository/LogRepository');

class LogService {

  /**
   * Insert a new user 
   * @param {*} obj 
   */
  static async insert(obj) {

    try {

      LogRepository.insert(obj);

      return;
      
    } catch (err) {
      console.log(err);
      throw err;
    }

  }

   /**
   * List
   */
  static async list(obj) {
    
        try {

          return LogRepository.list();
          
        } catch (err) {
          console.log(err);
          throw err;
        }
    
      }

}

module.exports = LogService;