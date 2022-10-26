// 1
function changeWordsOrder(str) {
  const arrOfWords = str.split(' ');
  return arrOfWords.sort((a, b) => a.length - b.length);
}

console.log(changeWordsOrder('Hello world from the Moon'));

// 2

function countSymbols(str) {
  return str.split('').reduce(frequency, {});

  function frequency(prop, value) {
    prop[value] ? prop[value]++ : (prop[value] = 1);
    console.log(prop);
    return prop;
  }
}

console.log(countSymbols('Hello'));

// 3
function getModifiedArray(array) {
  return array.map((el, index) => {
    if (index === 0) {
      el = 'Start';
    } else if (index === array.length - 1) {
      el = 'End';
    }
    return el;
  });
}

console.log(getModifiedArray([12, 6, 22, 0, -8]));

// 4
const filterNums = (arr, num = 0, parameter = 'greater') =>
  parameter === 'less'
    ? arr.filter((el) => el < num)
    : arr.filter((el) => el > num);

console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less'));

// 5
const maxInterv = (...args) => {
  if (args.length <= 1) {
    return 0;
  } else {
    const positiveSubtraction = args
      .slice(1)
      .map((el, index) => Math.abs(el - args[index]));
    return Math.max(...positiveSubtraction);
  }
};

console.log(maxInterv(1, 10, 3, -6));

// 6
const sumOfLen = (...strings) => strings.join('').length;

console.log(sumOfLen('hello', 'hi'));

// 7

function combineArray(arr1, arr2) {
  const numArr1 = arr1.filter((el) => (el = typeof el === 'number'));
  const numArr2 = arr2.filter((el) => (el = typeof el === 'number'));
  return numArr1.concat(numArr2);
}

console.log(combineArray([12, 'User01', 22, true, -8], ['Index', 6, null, 15]));

// 8
function longestLogin(loginList) {
  const lengthOfLogins = loginList.map((el) => (el = el.length));
  const longestLengthIndex = lengthOfLogins.lastIndexOf(
    Math.max(...lengthOfLogins)
  );
  return loginList[longestLengthIndex];
}

console.log(longestLogin(['user1', 'user2', '333', 'user4', 'aa']));

// 9
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function processArray(arr, factorial) {
  return arr.map((el) => factorial(el));
}

console.log(processArray([1, 2, 3, 4, 5], factorial));

// 10
function overloadedFunc(argArr = [1, 2, 3], argNum = 2, argFunc = multiply) {
  return argFunc(argArr, argNum);
}

function multiply(argArr, argNum) {
  if (argArr instanceof Array) {
    return argArr.map((el) => el * argNum);
  } else {
    return argArr * argNum;
  }
}

console.log(overloadedFunc());

// 11 *
const combineFunctions =
  (...funcs) =>
  (initialArg) =>
    funcs.reduce((acc, func) => func(acc), initialArg);

// 12 *

let students = [
  {
    name: 'Anna',
    languages: ['English', 'Ukrainian'],
    age: 21,
  },
  {
    name: 'Bob',
    languages: ['Polish', 'Spanish'],
    age: 26,
  },
  {
    name: 'Alice',
    languages: ['Italian', 'Russian'],
    age: 18,
  },
];

// function getLanguages(students, funcCondition) {
//   return students.filter(funcCondition).map((student) => student.languages);
// }

const getLanguages = (students, funcCondition = condition) => {
  let languages = [];
  students.reduce((accumulator, student) => {
    if (funcCondition(student)) {
      accumulator.push(student.languages);
    }
    languages = accumulator;
    return accumulator;
  }, []);
  return languages.flat();
};

function condition(student) {
  return student;
}

console.log(getLanguages(students, (student) => student.name.startsWith('A')));
