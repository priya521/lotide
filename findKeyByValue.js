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


const findKeyByValue = function(object, value){
  for (let key in object){
      if (object[key].includes(value)){
          return key;
  }
}
}
const bestTVShowsByGenre = { 
sci_fi: "The Expanse",
comedy: "Brooklyn Nine-Nine",
drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sci_fi");
