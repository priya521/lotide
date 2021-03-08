
const assertEqual = require('../assertEqual');

function eqArrays(arr1,arr2) {
  if(arr1.length!==arr2.length) { 
    return false
   }
  return arr1.every((element,index)=>{
    if(element===arr2[index]){
      return true
    } else {
      return false
    }
  });
  
}

console.log(eqArrays([1], [2]))
console.log(eqArrays([1], ['1']));
console.log(eqArrays(['a', 'b'], ['a', 'b']));
console.log(eqArrays([1], ['1']));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true);
assertEqual(eqArrays(['a','b'], [1, 2, 3]), true);
