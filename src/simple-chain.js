const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || !Number.isInteger(position))  {
      this.resetChain();
      throw new Error('You can\'t remove incorrect link!');
    }

    this.chain.splice(position - 1, 1);
    return this;
    },
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    finishChain() {
      let answer = this.chain.join('~~');
      this.resetChain()
      return answer;
      
    },

    resetChain() {
      this.chain = [];
    }
  };

  module.exports = {
    chainMaker
  };
