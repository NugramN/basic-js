const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.value.split('~~').filter(element => element !== 'undefined').length;
  },
  addLink(value) {

    this.value += `~~( ${value} )`;
    return this;
  },
  removeLink(position) {
    this.value = this.value.split('~~').filter(element => element !== 'undefined');

    //console.log(this.value.length);

    if (position < 1 || position > this.value.length || typeof position != 'number') {
      this.value = [];
      throw new Error();
    } else {
      if (this.value) {

        this.value.splice(position - 1, 1);
        this.value = this.value.join('~~');
        return this;
      }
    }

  },
  reverseChain() {

    if (this.value) {
      this.value = this.value.toString().split('~~').filter(element => element !== 'undefined');
      this.value = this.value.reverse();
      this.value = this.value.join('~~');
    }
    return this;
  },
  finishChain() {
    this.value = this.value.split('~~').filter(element => element !== 'undefined');
    let res = this.value.join('~~');
    this.value = [];
    return res;

  }
};

module.exports = chainMaker;
