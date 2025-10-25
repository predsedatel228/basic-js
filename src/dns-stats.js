const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const answer = {};
  for (let domain of domains) {
    const levels = domain.split('.').reverse();
    let i = '';
    for (let level of levels) {
      i += `.${level}`;
      answer[i] = answer[i] ? answer[i] + 1 : 1;
    }
  }
  return answer;
}

module.exports = {
  getDNSStats,
};
