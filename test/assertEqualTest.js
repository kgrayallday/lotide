const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // FAILS
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // PASSES

assertEqual(1, 2); // FAILS
assertEqual(1, 1); // PASSES