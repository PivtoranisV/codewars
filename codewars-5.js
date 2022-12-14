// 51
// Likes Vs Dislikes
// https://www.codewars.com/kata/62ad72443809a4006998218a
// function likeOrDislike(buttons) {
//   let state = 'Nothing';

//   for (let i = 0; i < buttons.length; i++) {
//     if (buttons[i] === state) {
//       state = 'Nothing';
//     } else {
//       state = buttons[i];
//     }
//   }

//   return state;
// }

function likeOrDislike(buttons) {
  return buttons.reduce(
    (prev, next) => (prev === next ? 'Nothing' : next),
    'Nothing'
  );
}

console.log(likeOrDislike(['Like', 'Dislike', 'Dislike', 'Dislike']));

// 52
// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
function isIsogram(str) {
  const uniqueElements = new Set(str.toLowerCase());
  return uniqueElements.size === str.length;
}

console.log(isIsogram('Dermatoglyphics'));

// 53
// Grasshopper - Grade book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade(s1, s2, s3) {
  const averageScore = [s1, s2, s3].reduce((prev, next) => prev + next) / 3;
  if (averageScore >= 90) {
    return 'A';
  } else if (averageScore >= 80 && averageScore < 90) {
    return 'B';
  } else if (averageScore >= 70 && averageScore < 80) {
    return 'C';
  } else if (averageScore >= 60 && averageScore < 70) {
    return 'D';
  } else return 'F';
}
console.log(getGrade(52, 8, 87));

// 54
// Remove exclamation marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
function removeExclamationMarks(s) {
  return [...s].filter((el) => el !== '!').join('');
}

console.log(removeExclamationMarks('Hello World!'));

// 55
// You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
const isSquare = (n) => {
  const squareRoot = Math.sqrt(n);
  return squareRoot % 1 === 0;
};

console.log(isSquare(100));

// 56
// How good are you really?
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
  const averagePoints =
    classPoints.reduce((prev, next) => prev + next) / classPoints.length;
  return yourPoints > averagePoints;
}
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

// 57
// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
  const countX = str
    .toLowerCase()
    .split('')
    .filter((el) => el === 'x').length;

  const countO = str
    .toLowerCase()
    .split('')
    .filter((el) => el === 'o').length;

  return countX === countO;
}

console.log(XO('xxxOo'));

// 58
// Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let indexOfDiff;
    let currentNum = numbers[i];
    let diff = target - currentNum;
    if (numbers.includes(diff)) {
      indexOfDiff = numbers.indexOf(diff);
      if (indexOfDiff !== i) {
        return [i, indexOfDiff];
      }
    }
  }
}

console.log(
  twoSum([-472, 465, -682, -790, -982, 58, 148, -977, 112, 837, -122], -64)
);

// 59
// Will there be enough space?
// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
function enough(cap, on, wait) {
  const leftOnBusStop = on + wait - cap;
  return leftOnBusStop < 0 ? 0 : leftOnBusStop;
}

console.log(enough(20, 5, 25));
