// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

//короткий вариант
// function invert(array) {
//   return array.map(elem => elem*(-1));
// }


function invert(array) {
  let res = array.map(function (elem) {
    return elem*(-1);
  });
  console.log(res);
}

let a = [-1, -2, -3, 4, -5];
invert(a);