const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:${actual}===${expected}`);
  }   else {
    console.log(`Assertion Failed:${actual}!=${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2,3);
assertEqual("munni","munni");

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); 

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); 