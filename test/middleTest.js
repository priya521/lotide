
const assertArraysEqual = require('../assertArraysEqual');




function middle(array){
  if (array.length === 1 || array.length === 2){
    return [];
}
if (array.length % 3 === 0){
    let middleIndex = (array.length - 1)/ 2
    return [array[middleIndex]]
}else {
    let middleIndex = Math.floor((array.length - 1) / 2);
    return [array[middleIndex], array[middleIndex + 1]]
}
}

assertArraysEqual(middle([1,2,3,4]),[2,3]);
console.log(middle([1,2,4]));
console.log(middle([1, 2]));

