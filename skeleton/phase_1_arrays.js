// Array#uniq - returns a new array containing only the unique elements of the original array
// the unique elements should be in the order in which they first appear
// should not mutate the original array

Array.prototype.uniq = function() {
  let uniques = [];
  // same as ruby's def my_uniq
  // uniques = []

  for (let i = 0; i < this.length; i++) {
  // i = 0
  // while i < self.length
  // i += 1
    if (!uniques.includes(this[i]))
      uniques.push(this[i]);
      // unless uniques.includes self[i]
          // uniques.push(self[i])
  }
  return uniques;
};

console.log("testing uniq1");
testArr = [1, 2, 3, 1];
console.log(testArr.uniq());
console.log(testArr);


Array.prototype.uniq2 = function() {
  let uniques = [];
  // same as ruby's def my_uniq
  // uniques = []
  let i = 0;
    while (i < this.length) {
      if (!uniques.includes(this[i]))
        uniques.push(this[i]);
      i ++;
    }
  return uniques;
};

console.log("testing uniq2");
testArr = [1, 2, 3, 1];
console.log(testArr.uniq2());
console.log(testArr);




// Array#twoSum - returns an array of position pairs
// where the elements sum to zero

// Array.prototype.twoSum = function() {
//   let pairs = [];
//
//   let i = 0;
//     while (i < this.length) {
//
//     let j = i + 1;
//       while (j < this.length) {
//         if (this[i] + this[j] === 0) {
//           pairs.push([i, j])
//         }
//       j++;
//       }
//     i++;
//     }
//   // pairs = pairs.slice(0, (pairs.length / 2));
//   return pairs;
// };

Array.prototype.twoSum = function() {
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0)
        pairs.push([i, j]);
    }
  }
  return pairs;
};

console.log("testing twoSum");
twoSumTest = [3, 4, 5, -1, -5, -3]; // => [[0, 5], [2, 4]
console.log(twoSumTest.twoSum());
console.log(twoSumTest);



// Array#transpose - where we have a two-dimensional array representing a matrix.
// returns the transpose
// should not mutate the original array

// def mytranspose
//
//   result = []
//   self.first.length.times do { result << [] }
//
//   self.each_with_index do |subarr, i|
//     subarr.each_with_index do |ele, j|
//       result[j] << ele
//     end
//   end
// end

Array.prototype.transpose = function() {
  let result = [];

  for (let i = 0; i < this[0].length; i++) {
    result.push([]);
  }

  this.forEach(function(subarr) {
    subarr.forEach(function(ele) {
      let ele_idx = subarr.indexOf(ele);
      result[ele_idx].push(ele);
    });
  });

  return result;
};

console.log("testing transpose");
let transposeTest = [[1, 2, 3], [4, 5, 6]];
console.log(transposeTest.transpose()); // => [[1, 4], [2, 5], [3, 6]]
// console.log(transposeTest);

// Array.
