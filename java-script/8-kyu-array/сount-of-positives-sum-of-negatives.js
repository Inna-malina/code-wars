// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function count(input) {
  let arrOne = [];
  let arrTwo = [];
  let res = [];

  if (!input || input.length === 0) {
    return [];
  }

  input.filter(function (elem) {
    if (elem > 0) {
      return arrOne.push(elem);
    } else {
      return arrTwo.push(elem);
    }
  });
  let arrThree = arrTwo.reduce((a, b) => a + b, 0);

  return res.concat(arrOne.length).concat(arrThree);
}

count([0]);