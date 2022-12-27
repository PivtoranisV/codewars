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

//62
//shorter concat [reverse longer]
//https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript
function shorter_reverse_longer(a, b) {
  return a.length >= b.length
    ? b.concat(a.split('').reverse().join(''), b)
    : a.concat(b.split('').reverse().join(''), a);
}

console.log(shorter_reverse_longer('first', 'abcde'));
