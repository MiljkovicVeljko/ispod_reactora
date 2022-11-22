// old ES5 function variations

// 1. named function with declaration
function namedFn() {
  return 'hello world'
}
// 2. named function declaration and expression
let functionExpression = function named() {
  console.log('hello word');
}
// functionExpression();

// 3. anonymous function declaration and expression
let functionExpression2 = function () {
  console.log('hello word');
}

// throw error: SyntaxError: Function statements require a function name
// function () {
//   console.log('hello word');
// }


// New ES6 Arrow function

// The return keyword is implied and can be omitted if using arrow functions without a block body.

const sum = (a, b) => a + b;
// console.log(sum(2, 5)); // output: 7

// explicit return with block body works the same as above:
const sum2 = (a, b) => {
  return a + b;
}

let func = (a) => {} // parentheses optional with one parameter
let func2 = (a, b, c) => {} // parentheses required with multiple parameters