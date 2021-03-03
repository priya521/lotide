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

const countLetters = function(string){
  let result = {};
  for (const letters of string) {
      if (result[letters]){
          result[letters] += 1
      }else {
          result[letters] = 1
      }
  }
  return result;
}

console.log(countLetters("Lighthouse"));