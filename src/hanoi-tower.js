const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let turns, seconds;
    turns = Math.pow(2,disksNumber) - 1;
   seconds = Math.floor(turns * 3600 / turnsSpeed);
    return new Object({turns: turns, seconds: seconds});
 
};
