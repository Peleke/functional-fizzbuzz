'use strict';

var _helpers = require('./helpers');

const fizzbuzz = (upperBound = 100) => {
  const hunnid = [...(0, _helpers.range)(1, upperBound)];

  return hunnid.map(_helpers.filterFizzBuzz).map(_helpers.filterFizz).map(_helpers.filterBuzz);
};

(function main(upperBound) {
  fizzbuzz(upperBound).forEach((0, _helpers.unary)(console.log));
})(process.argv[2]);

