// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.

function isVow(a) {
  return a.map((elem) => {
    let char = String.fromCharCode(elem);
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
      return char;
    }
    return elem;
  });
}

isVow([118, 117, 120]);