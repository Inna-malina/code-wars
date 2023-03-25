function points(games) {
  let arr1 = games.map(function (elem) {
    return elem.replace(':', '').split('').map(function (num) {
      return Number(num);
    });
  });
  let arr2 = arr1.map(function (elem) {
    if (elem[0] > elem[1]) {
      elem = 3;
      return elem;
    }
    if (elem[0] < elem[1]) {
      elem = 0;
      return elem;
    } else {
      elem = 1;
      return elem;
    }
  }).reduce((a, b) => a + b, 0);
  console.log(arr2);
}

points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]);