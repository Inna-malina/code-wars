// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut (string) {
let res = string.split('').map((elem)=>{
  if(elem == "a" || elem == "e" || elem == "i" || elem == "o" || elem == "u"){
    elem = '';
  }
  return elem;
}).join('');
console.log(res);
}

shortcut ("goodbye");