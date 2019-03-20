const request = require("request");  
  class Ut {  

    static promiseReq(opts = {}) {
      return new Promise((resolve, reject) => {  
        request(opts, (e, r, d) => {  
          if (e) {  
            return reject(e);  
          }  
          if (r.statusCode != 200) {
            return reject(`back statusCode：${r.statusCode}`);  
          }  
          return resolve(d);  
        });  
      })  
    }

  }

  module.exports = Ut;  