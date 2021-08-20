const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertion PASSED ${arrOne} does equal ${arrTwo}`);
  } else {
    console.log(`❌ Assertion FAILED ${arrOne} does NOT equal ${arrTwo}`);
  }
}

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


const words = ["high", "as", "a", "kite", "by", "then"];

const map = function (array, callback) {
  // temporary code:
  console.log('array: ', array);
  console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;

}

const results1 = map(words, word => word[0]);
console.log(results1);


// Ricky code //


// rickys assert equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);// use of colour to help visual aid
  }
  else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);// use of colour to help visual aid
  }
};

function eqArrays(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};