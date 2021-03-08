const assertEqual = require ('../assertEqual')


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

module.export = assertEqual;