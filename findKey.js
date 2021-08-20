const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (const key in object) {
    console.log("key is ", key);
    console.log("object[key]=", object[key]);
    if (callback(object[key])) {

      return key
    }
  }
}

// ?: the call back knows where to look for the data, the higher function does not (x.stars === 2)
let example = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)) // => "noma"

assertEqual(example, "noma"); // Looks for noma - noma exists in object[key] - return true
assertEqual(example, "kyle"); // example always looks for 2 and finds noma, which !== kyle