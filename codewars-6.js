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

//63
//Mumbling
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  return [...s]
    .map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index))
    .join('-');
}

console.log(accum('ZpglnRxqenU'));

//64
//Sort the odd
//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
  const odds = array.filter((el) => el % 2).sort((a, b) => a - b);

  return array.map((el) => (el % 2 ? odds.shift() : el));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));

//65
//Counting Duplicates
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  const CharacterCount = text.toLowerCase().split('').reduce(frequency, {});
  return Object.values(CharacterCount).filter((el) => el > 1).length;

  function frequency(prop, value) {
    prop[value] ? prop[value]++ : (prop[value] = 1);
    return prop;
  }
}

console.log(duplicateCount('aabBcde'));
