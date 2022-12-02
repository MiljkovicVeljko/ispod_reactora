// DRY principle - Don't Repeat Yourself

function tenSquared() {
  return 10 * 10
}

function nineSquared() { 
  return 9 * 9
}

// 1. Generalize the input
function squared(n) {
  return n * n
}

squared(10)
squared(9)

// 2. High Order Function
function copyArrayAndMultiplyBy2(array) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output
}

function copyArrayAndDivideBy2(array) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output
}

// We could generalize our function - 
// So we pass in our specific instruction 
// only when we run copyArrayAndManipulate
function copyArrayAndManipulate(array, instructions) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]))
  }
  return output
}

function multiplyBy2(input) { return input * 2 }
function divideBy2(input) { return input / 2 }
function addBy2(input) { return input + 2 }
function subtractBy2(input) { return input - 2 }

// Here we use High Order and callback function
// What is HOF? The fn that takes in other fn (callback)
// HOF(copyArrayAndManipulate) -> callback(multiplyBy2) 
// similar to parent > child relations but in fn world
const res = copyArrayAndManipulate([1,2,3], multiplyBy2)
console.log(res);
