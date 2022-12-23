//60
//Vowel remover
//https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
function shortcut(string) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const ArrayCharacters = string.split('');

  return ArrayCharacters.filter((el) => !vowel.includes(el)).join('');
}

console.log(shortcut('complain'));
