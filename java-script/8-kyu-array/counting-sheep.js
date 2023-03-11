function countSheeps(arrayOfSheep) {
  let res = arrayOfSheep.filter(function (elem) {
    if (elem == false) {
      elem = 0;
    }
    return elem;
  });
  console.log(res);

  let count = 0;
  for (let i = 0; i < res.length; i++) {
    count++;
  }
  console.log(count);
}

let a = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true
];
countSheeps(a);