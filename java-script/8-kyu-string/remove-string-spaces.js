// Write a function that removes the spaces from the string, then return the resultant string.
function noSpace(x) {
  let arr = x.split('');
  let arr2 = arr.filter((elem) => {
    if (elem != ' ') {
      return elem;
    }
  });
  let arr3 = arr2.join('');
  console.log(arr3);
}

noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");

// function noSpace(x){
//   let arr = x.split('');
//   return arr.filter((elem) => {
//     if (elem != ' ') {
//       return elem;
//     }    
//   }).join('');
// }