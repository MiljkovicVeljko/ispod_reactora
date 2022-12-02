// Destructuring Object
// Spread and Rest operator
// Copy of object (problem of nested object)
// Copy of array (problem of nested arrays)
// Shallow vs Deep copy

// Destructuring object
let obj = {
  a: 55,
  b: 44
}
let { a, b } = obj;
console.log(a);
console.log(b);
// same as
console.log(obj.a);
console.log(obj.b);

// Destructuring nested object
const Person = {
  name: 'Harry Potter',
  age: 29,
  sex: 'male',
  materialStatus: 'single',
  address: {
    country: 'USA',
    state: 'Nevada',
    city: 'Carson City',
    pinCode: '500014'
  }
};

const {address: { state, pinCode }, name } = Person;
console.log(name, state, pinCode); // output: Harry Potter Nevada 500014

// Destructuring array
let [first, second] = [3, 6];
console.log(first); // output: 3
console.log(second); // output: 6

// Spread operator
/**
 * The spread (...) syntax allows an iterable, such as an array or string, 
 * to be expanded in places where zero or more arguments (for function calls) 
 * or elements (for array literals) are expected. 
 */

const greenRow = [4,6,7,8]
const yellowRow = ['6456','a','bfg', 5]
const mergeToRows = [ ...greenRow, ...yellowRow ];
// console.log(mergeToRows); // output: [4,6,7,8,'6456','a','bfg', 5]

const obj5 = { key1: 'value1' };
// const array = [...obj]; // TypeError: obj is not iterable

const user = {
  username: 'Veljko',
  id: 1,
  subscribed: false
}

const subscribeUser = {
  ...user,
  subscribed: true
}
// same as
const subscribeUser2 = {
  id: 1,
  username: 'Veljko',
  subscribed: true
}

// spread with fn
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// console.log(sum(...numbers));
// expected output: 6

// What is REST?
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
// providing a way to represent variadic functions in JavaScript.

function sum2(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum2(1, 2, 3));
// expected output: 6

console.log(sum2(1, 2, 3, 4));
// expected output: 10