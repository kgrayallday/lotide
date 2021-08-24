const tail = require('../tail');
const assert = require('chai').assert;

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words), ["Lighthouse", "Labs"]); // original array should still have 3 elements!

describe("#tail", () =>{

  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

} )