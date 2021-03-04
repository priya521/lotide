
const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1)
  const object2Keys = Object.keys(object2)
  console.log(object1Keys);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values of object1Keys) {
    if (Array.isArray(object1Keys[values]) && Array.isArray(object2Keys[values])) {
      if (!eqArrays(object1Keys, object2Keys)) {
        return false;
      } else {
        if (object1Keys !== object2Keys) {
          return false;
        }
      }
    }
  }
  return true;
}


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  console.log(actual);
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
  for (let values of actualKeys) {
    if (Array.isArray(actualKeys[values]) && Array.isArray(expectedKeys[values])) {
      if (!eqArrays(actualKeys, expectedKeys)) {
        console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected)
      } else {
        if (actualKeys !== expectedKeys) {
          console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected)
        }
      }
    }
  }
  console.log("✅✅✅ Assertion Passed: " + inspect(actual) + " === " + inspect(expected))
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);