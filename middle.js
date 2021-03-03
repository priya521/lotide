function eqArrays(arr1,arr2) {
  if(arr1.length !== arr2.length) { 
    return false;
   }
  return arr1.every((element,index)=>{
    if(element === arr2[index]){
      return true;
    } else {
      return false;
    }
  });
  
}
function assertArraysEqual(a1,a2){
  if(eqArrays(a1,a2)){
    console.log(`✅✅✅Assertion Passed:${a1}===${a2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:${a1}!=${a2}`);
  }

}
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(["1","2"],[1,2]);


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

console.log(middle([1,2,3,4]));
console.log(middle([1,2,4]));
console.log(middle([1, 2]));


