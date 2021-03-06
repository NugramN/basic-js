const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;

  matrix.forEach(function (item, i) {
    for (let i = 0; i < item.length; i++) {
      if (String(item[i]).includes('^^') && String(item[i]).length == 2) {
        counter++;
      }
    }


  });

  return counter;
};
