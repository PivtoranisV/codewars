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

// Create a Movie class, the constructor of which accepts 3 parameters: movie name name, movie genre category and start year of startShow.
// The class has a watchMovie() method that returns a phrase and adds a movie name name parameter to it at the end. For example, "I watch the movie Titanic!"
// Create an instance of the movie1 class with the title of the movie "Titanic", the genre "drama" and 1997 release.
// Create an instance of the movie2 class with the title of the movie "Troya", the genre "historical" and the 2004 release.

class Movie {
  constructor(name, category, startShow) {
    this.name = name;
    this.category = category;
    this.startShow = startShow;
  }
  watchMovie() {
    return `I watch the movie ${this.name}!`;
  }
}

const movie1 = new Movie('Titanic', 'drama', 1997);
const movie2 = new Movie('Troya', 'historical', 2004);

console.log(movie1.watchMovie());
console.log(movie2.watchMovie());

// Implement the Student class, the constructor of which accepts 2 parameters fullName - the name and surname of the student, direction - the direction in which he studies.
// Create a showFullName() method that returns the student's first and last name.
// Create a nameIncludes(data) method that, using the showFullName() method, checks for the text data argument in the student’s name and returns true if a match is found or false if not found.
// Create a static studentBuilder() method that returns a new instance of the class named ‘Ihor Kohut’ and the direction ‘qc’.
// Create a getter and setter direction() to read and specify the direction field.
// Create an instance of class stud1 named 'Ivan Petrenko' and direction 'web'.
// Create an instance of class stud2 named 'Sergiy Koval' and direction 'python'.
// Create an instance of the stud3 class named ‘Ihor Kohut’ and the direction ‘qc’ using the static studentBuilder() method.
class Student {
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }
  showFullName() {
    return this._fullName;
  }
  nameIncludes(data) {
    return this.showFullName().includes(data);
  }
  static studentBuilder() {
    return new this('Ihor Kohut', 'qc');
  }
  get direction() {
    return this._direction;
  }
  set direction(prop) {
    this._direction = prop;
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

console.log(stud1.showFullName());
console.log(stud1.nameIncludes('Ivan'));
console.log(stud2.direction);
console.log(stud3._direction);
stud1.direction = 'JS';
console.log(stud1.direction);

// Please, fill in missed lines of code.
// Product constructor should provide a generation of unique product id within the application no matter how many products are created.
// Distributor can store information about products in its products property and has an ability to add and remove a product.
// addProduct adds a new property to products with name of product id and value - product name.
// removeProduct removes a property with specified id from products
// Please, use Symbol data type.
class Distributor {
  constructor() {
    this.products = {};
  }

  addProduct(id, name) {
    this.products[id] = name;
  }

  removeProduct(id) {
    delete this.products[id];
  }
}

const localDistributor = new Distributor();
console.log(localDistributor);

class MyProduct {
  constructor(name) {
    this.name = name;
    this.id = Symbol(name);
  }

  distribute(distributor) {
    distributor.addProduct(this.id, this.name);
  }
}

const myProduct = new MyProduct('banana');
myProduct.distribute(localDistributor);
console.log(localDistributor.products);

// Implement the getMin(arr) function, which takes an array of numbers arr and returns the smallest number of the array. To solve the problem, you must use one of the methods to specify the context of this. It is forbidden to use any cycles.
function getMin(arr) {
  return Math.min.apply(null, arr);
}

console.log(getMin([2, 5, 6, 8, 1]));

//We have the product() function, you can see it on the snapshot below. This product() function finds the product of its arguments and also uses this object for the initial value of the product.
// Please, create a new function getProduct()  that, no matter how it is called, will be always bound to a particular this value. getProduct() should be created from the original product() function and work with the same logic, but should pass two additional arguments – 2 and 3 – to the original function, every time getProduct() is called.
// Object this for getProduct() function you should also define by yourself. Look at snapshot for clues what it should be.
const product = function () {
  return [].reduce.call(
    arguments,
    function (res, elem) {
      return res * elem;
    },
    this.product
  );
};

const contextObj = { product: 10 };

const getProduct = function (a, b) {
  return product.call(contextObj, 2, 3, a, b);
};

console.log(getProduct(6, 7));

//Implement the Plane class, the constructor of which accepts 3 parameters model - model of the plane, fuelSupply - capacity of a stock of fuel of the plane, fuelConsumption - average fuel consumption in liters on 100 km of flight.
// Create a method of class calcFlightRange(), which determines the range of the plane by the formula fuelSupply / fuelConsumption * 100 and returns it.
// Create a static method of class sortFlightRange(planesArray), which takes an array of instances of class planesArray, sorts the flight range of plane in ascending order and outputs the result to the console in the format plane_model: range.
// Create a TransportPlane class, which is inherited from the Plane class, the constructor of which takes 5 parameters model - plane model, fuelSupply - the amount of fuel, fuelConsumption - the average fuel consumption in liters per 100 km, cargo - maximum tonnage, addTank - about additional tanks of the plane  In this class, you need to override the calcFlightRange() method to take into account that the fuelSupply has increased the amount of fuel added by the addTank.
// Create a class PassengerPlane, which is inherited from the class Plane, whose constructor accepts 5 parameters model, fuelSupply, fuelConsumption, passengers - the maximum number of passengers, refueling - the amount of additional fuel received in the refueling. In this class, you need to override the calcFlightRange() method to take into account that the fuelSupply has increased refueling.
// Create a WarPlane class, which is inherited from the Plane class, the constructor of which accepts 5 parameters model, fuelSupply, fuelConsumption, missiles - the number of missile weapons, aerodynamicsKoef - the coefficient of aerodynamics of the plane. In this class, you need to override the calcFlightRange() method in such a way as to take into account that the flight range of the plane increases in proportion to the value of the aerodynamics coefficient of aerodynamicsKoef.

class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }

  calcFlightRange() {
    return (this.fuelSupply / this.fuelConsumption) * 100;
  }

  static sortFlightRange(planesArray) {
    return [...planesArray]
      .sort((a, b) => a.calcFlightRange() - b.calcFlightRange())
      .map((el) => console.log(`${el.model}: ${el.calcFlightRange()}`));
  }
}

class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }
  calcFlightRange() {
    return ((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100;
  }
}

class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
    super(model, fuelSupply, fuelConsumption);
    this.passengers = passengers;
    this.refueling = refueling;
  }
  calcFlightRange() {
    return ((this.fuelSupply + this.refueling) / this.fuelConsumption) * 100;
  }
}

class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }
  calcFlightRange() {
    return (
      this.aerodynamicsKoef * ((this.fuelSupply / this.fuelConsumption) * 100)
    );
  }
}

const plane1 = new TransportPlane('An-225 Mriya', 105000, 5000, 500, 300000);
console.log('An-225 Mriya: ', plane1.calcFlightRange());
const plane2 = new PassengerPlane('Boeing-747', 193000, 2500, 410, 90000);
console.log('Boeing-747:', plane2.calcFlightRange());
const plane3 = new WarPlane('F-22 Raptor', 8200, 320, 20, 1.2);
console.log('F-22 Raptor:', plane3.calcFlightRange());
const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);

//Implement the PizzaMaker class, which allows you to create pizza of different types, with different ingredients, calculate the price and calorie content of pizza.
// The pizza comes in 3 sizes: S, M and L.
// There are 4 types of pizza available: meat, fish, cheese and vegetarian.
// When creating a new pizza, be sure to specify the size and appearance.
// Additional ingredients are available that can be added to the pizza at the customer's request: tomatoes, peppers, bacon and olives.
// Each element that makes up pizza has its own name, price and calorie content. All of this data is contained in the pizzaMenu object.
// The PizzaMaker class has a number of methods for generating pizza:
// - addIngredient(ingredient) method adds an additional ingredient to the pizza. A new ingredient is added if it is not included in the pizza, and the message "ingredient_name has been added" is displayed in the console. If such an ingredient has already been added, the message "Such an ingredient already exists!" Is generated.
// - deleteIngredient(ingredient) method removes the specified ingredient from the list of existing ingredients, displays the message "ingredient_name has been deleted" to the console.
// - getIngredients() method returns a list of the attached ingredients with their name, price, calorie content.
// - getSize() method returns the size of the pizza.
// - getKind() method returns the type of pizza.
// - calculatePrice() method calculates and returns the total cost of a pizza, which consists of the sum of the values ​​of all its components.
// - calculateCalories() method calculates and returns the total calorie content of a pizza, which consists of the sum of the calories of all its components.
const pizzaMenu = {
  SIZE_S: { param: 'SIZE_S', price: 60, calorie: 300 },
  SIZE_M: { param: 'SIZE_M', price: 90, calorie: 450 },
  SIZE_L: { param: 'SIZE_L', price: 110, calorie: 600 },
  KIND_MEAT: { param: 'KIND_MEAT', price: 55, calorie: 230 },
  KIND_FISH: { param: 'KIND_FISH', price: 70, calorie: 150 },
  KIND_CHEESE: { param: 'KIND_CHEESE', price: 50, calorie: 200 },
  KIND_VEGETARIAN: { param: 'KIND_VEGETARIAN', price: 35, calorie: 50 },
  INGREDIENT_TOMATOES: { param: 'INGREDIENT_TOMATOES', price: 15, calorie: 5 },
  INGREDIENT_PEPPER: { param: 'INGREDIENT_PEPPER', price: 18, calorie: 5 },
  INGREDIENT_BACON: { param: 'INGREDIENT_BACON', price: 25, calorie: 40 },
  INGREDIENT_OLIVES: { param: 'INGREDIENT_OLIVES', price: 20, calorie: 0 },
};

class PizzaMaker {
  constructor(size, appearance) {
    this.size = size;
    this.appearance = appearance;
    this.moreIngredients = [];
  }

  addIngredient(ingredient) {
    if (this.moreIngredients.includes(ingredient)) {
      console.log('Such an ingredient already exists!');
    } else {
      this.moreIngredients.push(ingredient);
      console.log(`${ingredient.param} has been added`);
    }
  }

  deleteIngredient(ingredient) {
    console.log(`${ingredient.param} has been deleted`);
    const index = this.moreIngredients.indexOf(ingredient);
    this.moreIngredients.splice(index, 1);
    // const deletedIngredient = this.moreIngredients.filter(
    //   (el) => el !== ingredient
    // );
    // this.moreIngredients = deletedIngredient;
  }

  getIngredients() {
    return this.moreIngredients;
  }

  getSize() {
    return this.size.param;
  }

  getKind() {
    return this.appearance.param;
  }

  calculatePrice() {
    const ingredientPrice = this.moreIngredients
      .map((el) => el.price)
      .reduce((sum, next) => sum + next, 0);
    return this.size.price + this.appearance.price + ingredientPrice;
  }

  calculateCalories() {
    const ingredientCalorie = this.moreIngredients
      .map((el) => el.calorie)
      .reduce((sum, next) => sum + next, 0);
    return this.size.calorie + this.appearance.calorie + ingredientCalorie;
  }
}

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log(pizza.getSize());
console.log(pizza.getKind());
console.log(pizza.calculatePrice());
console.log(pizza.calculateCalories());
console.log('getIngredients:', pizza.getIngredients());
pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
console.log('getIngredients:', pizza.getIngredients());
pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);
console.log('getIngredients:', pizza.getIngredients());
console.log('calculatePrice:', pizza.calculatePrice());
console.log('calculateCalories:', pizza.calculateCalories());

// Implement the getPromise(delay, message) function, which takes an integer number delay  (between 0 and 2000) and string message and returns a Promise that waits for specified amount of time (using delay argument) and resolves with the message.
function getPromise(delay, message) {
  return new Promise((resolve) => {
    resolve(message);
    setTimeout(resolve, delay);
  });
}

getPromise(2000, 'hello').then(function (data) {
  console.log(data);
});

// Write an add(x, y) function that takes two arguments x and y. The function should return a Promise that resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise.
function add(x, y) {
  return new Promise((resolve, reject) =>
    typeof x === 'number' && typeof y === 'number'
      ? resolve(x + y)
      : reject('Error!')
  );
}

add(2, 2).then((res) => console.log(res));

// Implement the getAge() function to get user age. To find his age you need to call a getUser() async function that return a user object in format {role: "somerole", id: 1}. To get the actual user info you need to call another function getUserProfile(id), that uses id returned from the previous function and return user info as an object
// {name: "Petro", age: 15}. The getAge() must return the age of the user.

async function getUser() {
  return { role: 'somerole', id: 1 };
}

async function getUserProfile(id) {
  return { name: 'Petro', age: 15 };
}

async function getAge() {
  const response = await getUser();
  const id = response.id;
  const user = await getUserProfile(id);
  return user.age;
}
getAge().then((res) => console.log(res));

// Implement the take() function that converts a sequence of iterated values into a sequence of length n.
// Example usage:
// const arr = ['a', 'b', 'c', 'd'];
// for (const x of take(2, arr)) {
// console.log(x);
// }
// Output:
// a
// b
function* take(n, iterable) {
  for (let i = 0; i < n; i++) {
    yield iterable[i];
  }
}

const generator = take(3, ['a', 'b', 'c', 'd']);
const value = [...generator];

console.log(value);

// Please, implement a function accountPatients that takes a count of free beds in a hospital and returns two functions:
// the first one for adding a patient
// the second one for discharging a patient
// accountPatients should keep track of free beds in a hospital and every time when a patient is admitted or discharged, print the count to the console like in examples:
// A patient was discharged, 54 beds are available
// A patient was admitted, 34 beds are available
// When there are no beds available,
// Can not admit a patient, no beds available should be printed
// When there is an attempt to discharge a patient when there are no patients,
// There are no patients to discharge should be printed

const accountPatients = (beds) => {
  let freeBeds = beds;

  function admit() {
    if (freeBeds > 0) {
      freeBeds -= 1;
      console.log(`A patient was admitted, ${freeBeds} beds are available`);
    } else {
      console.log('Can not admit a patient, no beds available');
    }
  }

  function discharge() {
    if (freeBeds === beds) {
      console.log('There are no patients to discharge');
    } else {
      freeBeds += 1;
      console.log(`A patient was discharged, ${freeBeds} beds are available`);
    }
  }

  return [admit, discharge];
};

const [admit, discharge] = accountPatients(100);
admit();
admit();
discharge();
discharge();
discharge();

// Write a checkAdult(age) function whose input parameter is the age of the user age. The function checks whether the set age parameter is set correctly, if it is set incorrectly, the corresponding error should be generated and displayed in the console:
// - if the age value has not been set, you need to create the following error: "Please, enter your age",
// - If you set a negative age value, you need to create the following error: "Please, enter positive number",
// - if a non-numeric value of age was specified, you need to create the following error: "Please, enter number",
// - if the integer value of age was not specified, you need to create the following error: "Please, enter Integer number",
// - If the user is under 18, you need to create the following error: "Access denied - you are too young!".
// If there is no error, the message “Access allowed” is displayed in the console.
// In the function, implement the handling of possible exceptions, providing the output to the console of the name and description of the error.
// Regardless of whether the age parameter was set correctly or incorrectly, the message “Age verification complete” should be displayed at the end of the test.

function checkAdult(age) {
  try {
    if (!age) {
      throw new Error('Error Please, enter your age');
    } else if (age < 0) {
      throw new Error('Error Please, enter positive number');
    } else if (typeof age !== 'number') {
      throw new Error('Error Please, enter number');
    } else if (age % 1 !== 0) {
      throw new Error('Error Please, enter Integer number');
    } else if (age < 18) {
      throw new Error('Error Access denied - you are too young!');
    } else {
      console.log('Access allowed');
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Age verification complete');
  }
}

checkAdult(2);
