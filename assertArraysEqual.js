const eqArrays = require('./eqArrays');


const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertion PASSED ${arrOne} does equal ${arrTwo}`);
  } else {
    console.log(`❌ Assertion FAILED ${arrOne} does NOT equal ${arrTwo}`);
  }
}
// assertArraysEqual([1, 1, 1], [3, 3, 3]); // might have to copy this somewhere
// assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;