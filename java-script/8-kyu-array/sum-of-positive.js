// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {

  let res = arr.filter(elem => {
    if (elem <= 0) {
      elem = 0;
    }
    return elem;
  }).reduce((a,b) => a+b, 0);

  if (arr == []) {
    res = 0;
  }
  console.log(res);

}

positiveSum([]);