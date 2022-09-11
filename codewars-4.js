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
