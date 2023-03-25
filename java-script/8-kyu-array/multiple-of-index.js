// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function multipleOfIndex(array) {
  let res = [];
  for (let i = 0; i <= array.length; i++) {
    if ((array[i] % i) == 0) {
      res.push(array[i]);
    }
  }
  return res;
}

multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]);