const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  // code
  console.log(Object.keys(object));
  for (const key in object) {        // loop through the keys in the object
    if (object[[key] === value]) {  // when we find a match
      return key                   // return the key string
    }

  }
  return undefined               // else return undefined

}



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// assertEquals(findKeyByValue());