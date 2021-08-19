const eqObjects = function (object1, object2) {
  const onlyKeys1 = Object.keys(object1);
  const onlyKeys2 = Object.keys(object2);
  // console.log("onlyKeys1 value: ", onlyKeys1);
  // console.log("onlyKeys2 value: ", onlyKeys2);

  // first check if they do not have the same number of keys 
  if (onlyKeys1.length !== onlyKeys2.length) {
    // console.log("keys1 length =", onlyKeys1.length, "and Keys2 length =", onlyKeys2.length);
    return false
  }

  // if same number of keys, do the keys all match?
  for (const key of onlyKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2)) {
      if (eqArray(object1[key], object2[key])) {
        return true
      }
    }
    if (object1[key] !== object2[key]) { // checks if keys match not if order of keys match
      return false;
    }
    // console.log("object1 key:", object1[key]);
    // console.log("object2 key:", object2[key]);
  }
  return true

}

// const assertArraysEqual = function (arrOne, arrTwo) {
//   if (eqArrays(arrOne, arrTwo)) {
//     console.log(`✅ Assertion PASSED ${arrOne} does equal ${arrTwo}`);
//   } else {
//     console.log(`❌ Assertion FAILED ${arrOne} does NOT equal ${arrTwo}`);
//   }
// }


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion PASSED ${inspect(actual)} does equal ${inspect(expected)}`);

  } else {
    console.log(`❌ Assertion FAILED ${inspect(actual)} does NOT equal ${inspect(expected)}`);
  }
};

const myObj = {
  firstName: "kyle",
  lastName: "gray"
}

const myOtherObj = {
  isDog: true,
  dogsName: "Billie"
}

const mySameObj = {
  firstName: "kyle",
  lastName: "gray"
}

assertObjectsEqual(myObj, myOtherObj);
assertObjectsEqual(myObj, mySameObj);