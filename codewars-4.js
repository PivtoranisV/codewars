// 41
// Convert boolean values to strings 'Yes' or 'No'
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}
console.log(boolToWord(false));

// 42
// Categorize New Member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data) {
  return data.map((member) =>
    member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open'
  );
}

console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);

// 43
// Sentence Smash
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
function smash(words) {
  return words.join(' ');
}
console.log(smash(['hello', 'amazing', 'world']));

// 44
// Remove the minimum
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
  return numbers.filter(
    (_, index) => index !== numbers.indexOf(Math.min(...numbers))
  );
}

console.log(removeSmallest([2, 2, 1, 2, 1]));

// 45
// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
  const middleIndex = s.length / 2;
  return s.length % 2 === 0
    ? s
        .split('')
        .splice(middleIndex - 1, 2)
        .join('')
    : s.split('').splice(middleIndex, 1).join('');
}

console.log(getMiddle('testing'));

// 46
// Calculate average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function find_average(array) {
  const sum = array.reduce((prev, next) => prev + next, 0);
  return array.length !== 0 ? sum / array.length : 0;
}

console.log(find_average([1, 2, 3, 4]));

// 47
// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
function points(games) {
  const pointsForEachGame = games.map((el) =>
    el[0] > el[2] ? 3 : el[0] === el[2] ? 1 : 0
  );

  return pointsForEachGame.reduce((prev, next) => prev + next);
}

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);

// 47
// Number of People in the Bus
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
const number = (busStops) => {
  const getInto = busStops.map((el) => el[0]);
  const getIntoTotal = getInto.reduce((prev, next) => prev + next);

  const getOff = busStops.map((el) => el[1]);
  const getOffTotal = getOff.reduce((prev, next) => prev + next);

  return getIntoTotal - getOffTotal;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

// 48
// Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
function rentalCarCost(d) {
  const rentalCost = d * 40;
  return d < 3 ? rentalCost : d >= 7 ? rentalCost - 50 : rentalCost - 20;
}

console.log(rentalCarCost(7));

// 49
// Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar('eloquent'));

// 50
// The highest profit wins!
// https://www.codewars.com/kata/559590633066759614000063/train/javascript
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));
