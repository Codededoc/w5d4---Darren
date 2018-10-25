// Array#myEach(callback) - receives a callback function and executes the callback
// for each element in the array
// Note that JavaScript's forEach function has
// no return value (returns undefined)

function doubler(num) {
  console.log(num * 2);
}

[1, 2, 3].forEach(doubler);

// function myEach(array, cb) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(cb(array[i]));
//   }
// }
//
// console.log("myEach test");
// myEach([1, 2, 3], doubler);

Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    (cb(this[i]));
  }
};

console.log("myEach test");
([1, 2, 3].myEach(doubler));
console.log([1, 2, 3].myEach(doubler));


// Array#myMap(callback) - receives a callback function,
// returns a new array of the results of calling the callback function
// on each element of the array
// should use myEach and a closure

Array.prototype.myMap = function(func) {
  const ret = [];

  ret.push(this.myEach(func));
  return ret;
  // would this pass as having a closure since the const ret variable is
  // defined within this local context?
};

console.log("myMap test");
([1, 2, 3].myMap(doubler));
console.log([1, 2, 3].myMap(doubler));

// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject)
// receives a callback function, and optional initial value,
// returns an accumulator by applying the callback function to each element
// and the result of the last invocation of the callback (or initial value if supplied)

Array.prototype.myReduce = function (func, initialValue) {

  let arr_dup = this;

  if (!initialValue) {
    //if there's no initial value provided
    let acc = arr_dup[0];
    //set accumulator to first element of array
    arr_dup = arr_dup.slice(1);
    // re-assign arr_dup w/o 1st element so when you iterate, you don't iterate over the 1st element
  }

    acc = arr_dup.myEach(func);
    acc;

// WATTTTT
};

console.log("myReduce test");
console.log([1, 2, 3].myReduce(doubler, 1));
