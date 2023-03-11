// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
// Your task is to change the letters with diacritics:
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.
// For example:
// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters(string) {
  let res = string.split('').map(function (elem) {
    if (elem == 'ą') {
      elem = 'a';
    } else if (elem == 'ć') {
      elem = 'c';
    } else if (elem == 'ę') {
      elem = 'e';
    } else if (elem == 'ł') {
      elem = 'l';
    } else if (elem == 'ń') {
      elem = 'n';
    } else if (elem == 'ó') {
      elem = 'o';
    } else if (elem == 'ś') {
      elem = 's';
    } else if (elem == 'ź') {
      elem = 'z';
    } else if (elem == 'ż') {
      elem = 'z';
    }
    return elem;
  }).join('');

  return res;

}

correctPolishLetters("Jędrzej Błądziński");