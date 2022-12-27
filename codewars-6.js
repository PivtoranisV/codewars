//60
//Vowel remover
//https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
function shortcut(string) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const ArrayCharacters = string.split('');

  return ArrayCharacters.filter((el) => !vowel.includes(el)).join('');
}

console.log(shortcut('complain'));

//61
//Beginner - Reduce but Grow
//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
const grow = (x) => x.reduce((perv, next) => perv * next);

console.log(grow([1, 2, 3]));
