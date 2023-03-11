// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 

//Краткая запись
// function squareSum(numbers){
//   let res = numbers.map(elem => elem*elem).reduce((a,b) => a+b,0);
//   return res;
// }

function squareSum(numbers){
  let res = numbers.map(function(elem){
    return elem*elem;
  });
  console.log(res);
  let resTwo = res.reduce(function(a,b){
    return a+b;
  },0);
  console.log(resTwo);
}

let n = [0, 3, 4, 5];
squareSum(n);