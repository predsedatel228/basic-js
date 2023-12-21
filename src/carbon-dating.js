const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === undefined || !Boolean(Number(sampleActivity)) || Number(sampleActivity) < 0) {
    return false;
  }
  let i = 0.693 / HALF_LIFE_PERIOD;
  let time = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / i);
  if (time > 0) {
    return time;
  } else return false;
}

module.exports = {
  dateSample
};
