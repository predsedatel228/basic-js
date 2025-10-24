const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Boolean(members) && members.length > 0) {
    const a = members.map((el) => {
      if (typeof el === 'string') {
        return el.trim().toUpperCase()[0]
      }
    })
    .sort()
    .join('')
    return a;
    } else return false;
  }

module.exports = {
  createDreamTeam
};
