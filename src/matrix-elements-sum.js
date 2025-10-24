const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
   let matrixRowLength = matrix[0].length;
   let matrixColumnLength = matrix.length;
   for (let i = 0; i < matrixRowLength; i++) {
    for (let t = 0; t < matrixColumnLength; t++) {
      if (matrix[t][i] === 0 && t < matrixColumnLength - 1 ) {
        for (let s = t; s < matrixColumnLength; s++) {
          matrix[s][i] = 0;
        }
      }  
    }
   }

   for (let i = 0; i < matrixRowLength; i++) {
    for (let t = 0; t < matrixColumnLength; t++) {
      sum += matrix[t][i]; 
    }
   }
   return sum;
 }

module.exports = {
  getMatrixElementsSum
};
