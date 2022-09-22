function changeWordsOrder(str) {
  const arrOfWords = str.split(' ');
  return arrOfWords.sort((a, b) => a.length - b.length);
}

console.log(changeWordsOrder('Hello world from the Moon'));

function countSymbols(str) {
  return str.split('').reduce(frequency, {});

  function frequency(prop, value) {
    prop[value] ? prop[value]++ : (prop[value] = 1);
    console.log(prop);
    return prop;
  }
}

console.log(countSymbols('Hello'));
