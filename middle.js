const eqArrays = function (firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertion PASSED ${arrOne} does equal ${arrTwo}`);
  } else {
    console.log(`❌ Assertion FAILED ${arrOne} does NOT equal ${arrTwo}`);
  }
}

// The middle function should return an array with only the middle element(s) of the provided array. 
// This means that the length of the returned elements could vary.
// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
//
// We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.


const middle = function (array) {
  let result = [];
  let middle = Math.floor(array.length / 2);

  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 === 0) { // if even return two middle values
    return [array[middle - 1], array[middle]];

  } else if (array.length % 3 === 0) { // if odd return middle value
    return [array[middle]];
  }

}

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
