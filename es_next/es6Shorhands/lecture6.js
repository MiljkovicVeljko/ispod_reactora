// Default parameters

function print(a = 5) {
  console.log(a);
}
print() // output: 5
print(15) // output: 15

// in ES5 function inside object
const obj = {
  a: 5,
  fn: function nekaFn() {
    console.log('hello world');
  }
}
// in ES6 function inside object
const obj2 = {
  a: 5,
  nekaFn2() {
    console.log('hello world');
  }
}

// Object property assignment
// Before ES5
const num1 = 2
const num2 = 6
const numObj1 = {
  num1: num1,
  num2: num2
}
// Before ES6
// If key and value is the same we can use shorthand
const numObj2 = {
  num1,
  num2
}
