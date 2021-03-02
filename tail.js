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


Array.prototype.remove = function(tail) {
  const arr = this.slice();
  for (let i = 0; i < this.length; i++) {
    if (arr[i] === tail) {
      arr.splice(i, 1);
      return arr;
    }
  }
  return arr;
};

assertEqual(2,3);
assertEqual(this.length, 2);