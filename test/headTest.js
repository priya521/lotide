const assertEqual = require('../assertEqual');


function head(arr){
  let first = arr[0];
  //console.log(first);
  return first;
}
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = assertEqual;