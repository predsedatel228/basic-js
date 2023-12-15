const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = n.toString();
  let arr = [];
  for (let i = 0; i < nStr.length; i++) {
   let b = nStr;
   arr.push(parseInt(b.replace(b[i], ''), 10))
  }
  return Math.max.apply(null, arr);
 }

module.exports = {
  deleteDigit
};
