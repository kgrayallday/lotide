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




const without = function (source, itemsToRemove) {
  let newArr = source;

  for (let i = 0; i < itemsToRemove.length; i++) { // loop through items to remove

    for (let j = 0; j < source.length; j++) { // loop through the source array
      if (itemsToRemove[i] === source[j]) { // remove element fround array if matched with itemsToRemove
        newArr.splice(j, 1);
      }

    }
  }
  //console.log("New Array:", newArr);
  console.log("Old Array:", source);
  return newArr;
}


console.log(assertArraysEqual(without(['one', 'two', 'three'], ['three']), ['one', 'two'])); // SHOULD PASS
console.log(assertArraysEqual(without(['one', 'two', 'three'], ['three']), ['one', 'two', 'three'])); // SHOULD FAIL


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);