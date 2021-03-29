const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    if(arguments.length < 2 || typeof arguments[0] === 'undefined' || typeof arguments[1] === 'undefined') {
      throw new Error();
    }
  }    
  decrypt() {
    if(arguments.length < 2 || typeof arguments[0] === 'undefined' || typeof arguments[1] === 'undefined') {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
