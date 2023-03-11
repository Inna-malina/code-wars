// Create a function that returns the CSV representation of a two-dimensional numeric array.
function toCsvText(array) {
  let str = array.join(`\n`);
  console.log(str);
  
}


let arr =  [[-37,-98,-45,-15,30,-7,-99,-2,-77],
[-71,82,-41],
[56,-91,24,78,1,-25,78,-100,-7],
[62,19,-90,-38,-15],
[-1,34],
[-23,39,28,31,-93,41,-57],
[69,-93,79,32,80,94,28,-61,95]];

toCsvText(arr);