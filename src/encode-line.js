const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArr = str.split('');
  strArr.push(' ');
  let encoded = '';
  let counter = 0;
  let currEl = strArr[0];
  for (let i = 0; i < strArr.length; i++) {
    if (currEl === strArr[i]) {
      counter += 1;
    } else {
      counter > 1 ? encoded += `${counter}${currEl}` : encoded += `${currEl}`;
      currEl = strArr[i];
      counter = 1;
    }
  }
  return encoded;
}

module.exports = {
  encodeLine
};
