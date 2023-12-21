const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.addition || '';
  if (options.addition === false || options.addition === null ) {
    addition = `${options.addition}`;
  }
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let separator = options.separator || '+';
  let answer = '';

  for (let i = 0; i < repeatTimes; i++) {
    let additionRepeat = '';
    answer += str + addition;;
    for (let t = 1; t < additionRepeatTimes; t++) {
      additionRepeat += (additionSeparator + addition)
    }
    answer += additionRepeat;
    if (i < repeatTimes - 1) {
      answer += separator;
    }

  }
  return answer
}


module.exports = {
  repeater
};
