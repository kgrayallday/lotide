const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Asserion Passed ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed ${actual} !== ${expected}`);
  }
};

const eqArrays = function (firstArr, secondArr) {
  for (i = 0, j = 0; i < firstArr.length; i++, j++) {
    if (firstArr[i] === secondArr[j]) {
      return true;
    } else {
      return false;
    }
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 1, 1], [2, 2, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);