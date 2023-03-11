// Return the average of the given array rounded down to its nearest integer.
function getAverage(marks){
  let res = marks.reduce((a,b) => a+b,0)/marks.length;
  console.log(Math.floor(res));

}
let arr = [1,1,1,1,1,1,1,2];
getAverage(arr);