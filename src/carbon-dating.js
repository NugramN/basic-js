const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let t = 0;

  if ((typeof sampleActivity) === 'string' && sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY && (Number.isInteger(+sampleActivity) || (+sampleActivity === Number(+sampleActivity) && +sampleActivity % 1 !== 0))
    && sampleActivity.length !== 0 && sampleActivity.trim()) {

    t = Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693;

    return Math.ceil(t);
  } else {
    return false;
  }
};
