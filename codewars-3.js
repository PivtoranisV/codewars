// 31
// Friend or Foe?
// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends) {
  return friends.filter((el) => el.length === 4);
}
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']));

// 32
// Binary Addition
// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
function addBinary(a, b) {
  return (a + b).toString(2);
}
console.log(addBinary(5, 9));

// 32
// A Needle in the Haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
function findNeedle(haystack) {
  const position = haystack.indexOf('needle');
  return `found the needle at position ${position}`;
}
console.log(
  findNeedle([
    '283497238987234',
    'a dog',
    'a cat',
    'some random junk',
    'a piece of hay',
    'needle',
    'something somebody lost a while ago',
  ])
);

// 33
// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
  const lastDigitsZero = year.toString().endsWith('00');
  return lastDigitsZero
    ? Number(year.toString().slice(0, -2))
    : Number(year.toString().slice(0, -2)) + 1;
}
console.log(century(2022));

// 34
// Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((el) => el === true).length;
}
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// 35
// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n) {
  return Number(n.toString().split('').sort().reverse().join(''));
}

console.log(descendingOrder(1021));

// 36
// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ');
};
const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());

// 37
// Sort by Last Char
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
function last(x) {
  return x
    .split(' ')
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
console.log(last('what time are we climbing up the volcano'));

// 38
// Beginner Series #1 School Paperwork
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.log(paperwork(-1, 5));

// 39
// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  const positiveArr = arr.filter((number) => number >= 0);
  return positiveArr.reduce((prev, next) => prev + next, 0);
}

console.log(positiveSum([1, -2, 3, 4, 5]));

// 40
// String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(3, '*'));
