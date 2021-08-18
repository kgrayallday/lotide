const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

const eqArrays = function (firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // PASSES true === true
assertEqual(eqArrays([1, 1, 1], [2, 2, 2]), true); // FAILS false !== true
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // PASSES false === false
assertEqual(eqArrays([1, 2, 3], [1, 2,]), false); // PASSES false === false
