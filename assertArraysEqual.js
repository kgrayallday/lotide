const eqArrays = function (firstArr, secondArr) {
  for (i = 0, j = 0; i < firstArr.length; i++, j++) {
    if (firstArr[i] === secondArr[j]) {
      return true;
    } else {
      return false;
    }
  }
}

const assertArraysEqual = function (arrOne, arrTwo) {
  // console log appropriate message
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Assertion PASSED ${arrOne} does equal ${arrTwo}`);
  } else {
    console.log(`Assertion FAILED ${arrOne} does NOT equal ${arrTwo}`);
  }
}

assertArraysEqual([1, 1, 1], [3, 3, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3])