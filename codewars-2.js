//Convert number to reversed array of digits
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
  const arrayOfString = n.toString().split('').reverse();
  return arrayOfString.map((el) => Number(el));
}
console.log(digitize(35231));

//Highest and Lowest
//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers) {
  const arrayOfNumbers = numbers.split(' ');
  const minNumber = Math.min(...arrayOfNumbers);
  const maxNumber = Math.max(...arrayOfNumbers);
  return `${maxNumber} ${minNumber}`;
}
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));

//Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(arr) {
  const frequency = arr.reduce((occur, num) => {
    occur[num] ? occur[num]++ : (occur[num] = 1);
    return occur;
  }, {});
  console.log(frequency);

  for (const prop in frequency) {
    if (frequency[prop] % 2 != 0) {
      return Number(prop);
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

//What is between?
//https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

function between(a, b) {
  const arrLength = b - a + 1;
  const arrayOfNumbers = new Array(arrLength).fill(a);
  return arrayOfNumbers.map((el, index) => el + index);
}
console.log(between(0, 4));

//Split The Bill
//https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript
function splitTheBill(x) {
  const averagePaid = paidAmount(x);
  const cloneObj = { ...x };
  for (const amount in cloneObj) {
    console.log(cloneObj[amount]);
    cloneObj[amount] = parseFloat((cloneObj[amount] - averagePaid).toFixed(2));
  }
  return cloneObj;
}

function paidAmount(obj) {
  const totalFriends = Object.keys(obj).length;
  const values = Object.values(obj);
  const totalPaid = values.reduce((prev, next) => prev + next);
  return (totalPaid / totalFriends).toFixed(2);
}
// console.log(paidAmount({ A: 20, B: 15, C: 10 }));
console.log(splitTheBill({ A: 20.2, B: 15.4, C: 10.1 }));

//Even or Odd
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
const even_or_odd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');
console.log(even_or_odd(2));

//CSV representation of array
//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
function toCsvText(array) {
  return array.map((el) => el.join(',')).join('\n');
}
console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);

//String ends with?
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function solution(str, ending) {
  const strSizeEnding = str.slice(-ending.length);
  return strSizeEnding.includes(ending);
}
console.log(solution('sumo', 'omo'));

//Unique In Order
//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
const uniqueInOrder = function (iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};
console.log(uniqueInOrder('AAAABBBCCDAABBB'));

//Complementary DNA
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function DNAStrand(dna) {
  // let dnaArr = [...dna];
  // for (let i = 0; i < dnaArr.length; i++) {
  //   if (dnaArr[i] === 'A') {
  //     dnaArr[i] = 'T';
  //   } else if (dnaArr[i] === 'T') {
  //     dnaArr[i] = 'A';
  //   } else if (dnaArr[i] === 'G') {
  //     dnaArr[i] = 'C';
  //   } else if (dnaArr[i] === 'C') {
  //     dnaArr[i] = 'G';
  //   }
  // }
  // return dnaArr.join('');
  const dnaComplementary = dna
    .slice()
    .toLowerCase()
    .replace(/a/g, 'T')
    .replace(/t/g, 'A')
    .replace(/c/g, 'G')
    .replace(/g/g, 'C');
  return dnaComplementary;
}
console.log(DNAStrand('ATTGC'));
