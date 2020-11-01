const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let resArr = [];

  if (members && members.length !== 0 && Array.isArray(members)) {
    members.forEach((element) => {
      if (typeof element === 'string')
        resArr.push(element.trim()[0].toUpperCase());
    })

  } else
    return false;

  result = resArr.sort().join('');

  return result;
};
