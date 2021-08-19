const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} ===  ${expected}`);
  } else {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true (SHOULD BE TRUE?)

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false