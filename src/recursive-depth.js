const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let self = this;
    let cnt = 1;
    let max_cnt = 1;

    arr.forEach(function (elem) {

      if (Array.isArray(elem)) {
        cnt = 1 + self.calculateDepth(elem);



      }
      max_cnt = (cnt > max_cnt) ? cnt : max_cnt;
    });




    return max_cnt;
  }

};