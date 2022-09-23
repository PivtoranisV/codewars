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
