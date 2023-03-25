// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
function findAverage(arr) {

  let sum = arr.reduce((a, b) => a + b, 0);
  let res = sum / arr.length;

  if (arr.length == 0) {
    res = 0;
  }
  console.log(res);

}

findAverage([1,2,3,4]);