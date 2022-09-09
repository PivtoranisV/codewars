//Reverse words
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
  const arrayOfString = str.split(' ');
  return arrayOfString.map((el) => el.split('').reverse().join('')).join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

//Count by X
//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
function countBy(x, n) {
  let arr = [];
  for (let i = x; i <= n * x; i += x) {
    arr.push(i);
  }
  return arr;
}
console.log(countBy(3, 5));

//Rock Paper Scissors!
//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
const rps = (p1, p2) => {
  if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'rock' && p2 === 'scissors')
  ) {
    return 'Player 1 won!';
  } else if (p1 === p2) {
    return 'Draw!';
  }
  return 'Player 2 won!';
};

console.log(rps('rock', 'rock'));
//Sum without highest and lowest number
//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
function sumArray(array) {
  if (array && array.length > 2) {
    const sortedArray = array.sort((a, b) => a - b).slice(1, -1);
    return sortedArray.reduce((prev, next) => prev + next);
  }
  return 0;
}

console.log(sumArray(null));

//Printer Errors
//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(s) {
  const arrayOfChar = s.split('');
  const regex = /[a-m]/g;
  const arrayOfErrors = arrayOfChar.filter((el) => !el.match(regex));
  return `${arrayOfErrors.length}/${arrayOfChar.length}`;
}

console.log(
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
);

//Sum Arrays
//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
const sum = (numbers) =>
  numbers.length < 1 ? 0 : numbers.reduce((prev, next) => prev + next);

console.log(sum([1, 2, 5, 6]));

//Abbreviate a Two Word Name
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {
  return name
    .split(' ')
    .map((el) => el.slice(0, 1).toUpperCase())
    .join('.');
}
console.log(abbrevName('Sam Harris'));

//List Filtering
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
  return l.filter((el) => typeof el === 'number');
}
console.log(filter_list([1, 2, 'a', 'b']));

// Square(n) Sum
//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
function squareSum(numbers) {
  return numbers
    .map((el) => Math.pow(el, 2))
    .reduce((prev, next) => prev + next, 0);
}

console.log(squareSum([0, 3, 4, 5]));

//Detect Pangram
//https://www.codewars.com/kata/545cedaa9943f7fe7b000048
function isPangram(string) {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return alphabetArray.every((el) => string.toLowerCase().includes(el));
}
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
