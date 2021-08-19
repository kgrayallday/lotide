const eqArrays = function (firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertion PASSED ${arrOne} does equal ${arrTwo}`);
  } else {
    console.log(`❌ Assertion FAILED ${arrOne} does NOT equal ${arrTwo}`);
  }
}


const letterPositions = function (sentenceString) {
  const resultsObj = {};

  for (let i = 0; i < sentenceString.length; i++) {
    const letter = sentenceString[i];
    // if (sentenceString[i])
    // check by using? resultsObj[sentenceString[i]]
    if (letter !== " ") {
      if (resultsObj[letter]) {
        // push to its array
        resultsObj[letter].push(i);
        console.log(resultsObj);
      } else {
        // initialize 
        resultsObj[letter] = [i]

      }
    }
  }
  return resultsObj;
};

letterPositions('hello world');
assertArraysEqual(letterPositions("hello world").e, [1]); // SHOULD PASS
assertArraysEqual(letterPositions("hello world").h, [1]); // SHOULD FAIL
assertArraysEqual(letterPositions("hello world").w, [6]); // SHOULD PASS

// 1) remove the white space from the string
// 2) create an object to store letters and indexes?

// 3) loop through sentenceString if letter exists push current indexes to that letters array
// 4) if letter does not exist as key in results then add key with empty array to results
// 
