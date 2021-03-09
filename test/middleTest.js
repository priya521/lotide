
// const assertArraysEqual = require('../assertArraysEqual');




// function middle(array){
//   if (array.length === 1 || array.length === 2){
//     return [];
// }
// if (array.length % 3 === 0){
//     let middleIndex = (array.length - 1)/ 2
//     return [array[middleIndex]]
// }else {
//     let middleIndex = Math.floor((array.length - 1) / 2);
//     return [array[middleIndex], array[middleIndex + 1]]
// }
// }

// assertArraysEqual(middle([1,2,3,4]),[2,3]);
// console.log(middle([1,2,4]));
// console.log(middle([1, 2]));


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});





