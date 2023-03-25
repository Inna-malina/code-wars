function first(arr, n) {
  let res = [];
  if (n > 0) {
    res = arr.slice(0, n);
    console.log(res);
  }
  else if (n == 0) {
    console.log(res);
  }
  else{
    res = arr.slice(0, 1);
    console.log(res);    
  }
}

first(['a', 'b', 'c', 'd', 'e'], 1);