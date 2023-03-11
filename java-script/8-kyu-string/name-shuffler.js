// Write a function that returns a string in which firstname is swapped with last name.
// "john McClane" --> "McClane john"

function nameShuffler(str){
  let res = str.split(' ').reverse().join(' ');
  console.log(res);
}

nameShuffler('Mary jeggins');