const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ${actual} !== ${expected}`);
  }
};


const countLetters = function (sentenceString) {
  const countObj = {};
  sentenceString = sentenceString.split(' ').join('');

  // use for ... of loops w/ strings
  for (var letter of sentenceString) {
    if (countObj[letter]) {// if the letter exists in countObj increment it?
      countObj[letter] += 1;
    } else { // if letter does not already exists initialize it
      countObj[letter] = 1;
    }

  }
  return countObj

}

const count = countLetters("count my letters");

assertEqual(count["c"], 1); // SHOULD PASS
assertEqual(count["t"], 1); // SHOULD FAIL (3 t's)
