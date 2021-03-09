// const assertEqual = require ('../assertEqual')


// Array.prototype.remove = function(tail) {
//   const arr = this.slice();
//   for (let i = 0; i < this.length; i++) {
//     if (arr[i] === tail) {
//       arr.splice(i, 1);
//       return arr;
//     }
//   }
//   return arr;
// };

// assertEqual(2,3);
// assertEqual(this.length, 2);


// const assert = require('chai').assert;
// const tail   = require('../tail');

// describe("#tail", () => {
//   it("returns [2,3] for [1, 2, 3]", () => {
//     assert.strictEqual(tail([1, 2, 3]),[2, 3]);
//   });

// });


const assert = require('chai').assert;
const tail=require("../tail");

 const result = ["Hello", "Lighthouse", "Labs"];
const words = ["Yo Yo", "Lighthouse", "Labs", "Jello"];

describe("#tail", () => {
  it("returns Array for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.isArray(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns new array of length 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(result).length, 2);
  });

  it("returns new array of length 3 ['Yo Yo', 'Lighthouse', 'Labs', 'Jello']", () => {
    assert.strictEqual(tail(words).length, 3);
  });
  it("returns new array of length 2  ['1', '2', '3']", () => {
         assert.isArray(tail(['1','2','3']),['2','3']);
      });

    
  
});