// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(arr){
let res = arr.map(function(elem) {
  return elem *2;
});
console.log(res);
}

maps([]);