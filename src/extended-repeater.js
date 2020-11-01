const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options['repeatTimes'];

  let separator = (typeof options['separator'] === 'undefined') ? '+' : options['separator'];

  let addition = (typeof options['addition'] === 'undefined') ? '' : options['addition'];

  let additionRepeatTimes = (typeof options['additionRepeatTimes'] === 'undefined') ? '' : options['additionRepeatTimes'];


  let additionSeparator = (typeof options['additionSeparator'] === 'undefined') ? '|' : options['additionSeparator'];

  let result = [];

  if (typeof repeatTimes === 'undefined') {
    result.push(str);
    result.push(addition);
  } else {

    for (let i = 0; i < repeatTimes; i++) {
      if (i === (repeatTimes - 1)) {

        if (additionRepeatTimes > 0) {
          result.push(str);
          for (let i = 0; i < additionRepeatTimes; i++) {
            if (i === (additionRepeatTimes - 1)) {
              result.push(addition);
            } else {
              result.push(addition);
              result.push(additionSeparator);
            }

          }

        }
        else {
          result.push(str);
          result.push(addition);
          result.push(additionSeparator);
        }
      }
      else {
        console.log(repeatTimes);
        result.push(str);
        for (let i = 0; i < additionRepeatTimes; i++) {
          if (i === (additionRepeatTimes - 1)) {
            result.push(addition);
          } else {
            result.push(addition);
            result.push(additionSeparator);
          }

        }
        result.push(separator);

      }
    }

  }
  return result.join('');
};
