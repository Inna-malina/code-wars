// An AI has infected a text with a character!!
// This text is now fully mutated to this character.
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
// Note: The character is a string of length 1 or an empty string.

function contamination(text, char){
  let res = [];
  for (let i = 0; i< text.length; i++){
   res.push(char);
    
  }
  console.log(res.join(''));
}

contamination("asdf", "z");

// function contamination(text, char){
//   return char.repeat(text.length);
// }