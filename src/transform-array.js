const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (i === arr.length - 1) {
          break;
        } else {
          newArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        {
          if (i === 0) {
            break;
          } else if (arr[i - 2] === '--discard-next') {
            break;
          } else {
            newArr.push(newArr[newArr.length - 1]);
          }
        }
        break;
      case '--discard-next':
        if (i === arr.length - 1) {
          break;
        } else {
          i += 1;
        }
        break;
      case '--discard-prev':
        if (arr[i - 2] !== '--discard-next') {
          newArr.pop();
        }
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
