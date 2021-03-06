const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(arguments.length !== 0 && !(date instanceof Date)) {
    throw new Error("THROWN");
  }
  else if (arguments.length !== 0 && date instanceof Date) {
    const [
      year,
      month,
      day
    ] = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      ];

    if (month >= 2 && month < 5) {
      return 'spring';
    } else if (month >= 5 && month < 8) {
      return 'summer';
    } else if (month >= 8 && month < 11) {
      return 'autumn (fall)';
    }
    else
      return 'winter';
  }
  else {
    return 'Unable to determine the time of year!';
  }
      
    
};
