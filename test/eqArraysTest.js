const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // PASSES true === true
assertEqual(eqArrays([1, 1, 1], [2, 2, 2]), true); // FAILS false !== true
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // PASSES false === false
assertEqual(eqArrays([1, 2, 3], [1, 2,]), false); // PASSES false === false