/**
 * 1. refactor OLD ES5 function to sorter arrow fn
 * 2. log to console all subscribed users via ES5 and ES6
 * 
 * 
 * 
 */

const users = [
  { username: 'veljko', password: '1234', subscribed: true },
  { username: 'kristina', password: '1234', subscribed: false },
  { username: 'branko', password: '1234', subscribed: true },
  { username: 'mladen', password: '1234', subscribed: false },
  { username: 'djordje', password: '1234', subscribed: true },
]

function subscribedUsers() {
  for (let i = 0; i < users.length; i++) {
  if (users[i].subscribed) {
    console.log(users[i].username);
  }
}
}
// subscribedUsers();

const subUsers = () => users
  .filter(user => user.subscribed)
  .map(user => user.username);
console.log(subUsers());



const oldEs6 = (a, b) => a + b;
let result = oldEs6(5, 2);
console.log(result);

function getSubs(list) {
  // logic
}

// 1. named function with declaration
function namedFn() {
  return 'hello world'
}

const namedFnArrow = () => 'hello world';

// 2. named function declaration and expression
let functionExpression = function named() {
  console.log('hello word');
}

const functionExpressionArrow = () => console.log('hello world');
// functionExpressionArrow();
// functionExpression();

// 3. anonymous function declaration and expression
let functionExpression2 = function () {
  console.log('hello word');
}

