// const assertEqual = require('../assertEqual');

// Before Mocha . Using export modules
// function head(arr){
//   let first = arr[0];
//   //console.log(first);
//   return first;
// }
// assertEqual(head([5,6,7]), 5);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//


//After Mocha and chai 


const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});