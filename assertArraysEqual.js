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
    console.log(`Assertion Passed:${a1}===${a2}`);
  } else {
    console.log(`Assertion Failed:${a1}!=${a2}`);
  }

}
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(["1","2"],[1,2]);

