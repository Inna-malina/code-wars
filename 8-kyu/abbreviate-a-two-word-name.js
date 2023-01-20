function abbrevName() {

  // let str = "patrick feenan";
  // let str1 = str.split(' ');
  // let str2 = str1.map(function (elem) {
  //   return elem[0];
  // });
  // let str3 = str2.join(".").toUpperCase();
  // console.log(str3);

  //* или такой вариант сокращённый
  let str = "patrick feenan";
  let str1 = str.split(' ').map(function (elem) {return elem[0];}).join(".").toUpperCase();
  console.log(str1);
}
abbrevName();