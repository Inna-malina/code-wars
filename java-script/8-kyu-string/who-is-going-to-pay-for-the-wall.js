function whoIsPaying(name) {
  let arr = [];
  if (name.length <= 2) {
    arr = arr.concat(name);

  } else {
    let res = name.split('');
    let res2 = res[0] + res[1];
    arr = [name, res2];
  }
}

whoIsPaying("a");