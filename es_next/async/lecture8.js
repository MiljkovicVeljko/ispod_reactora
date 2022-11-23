// concepts to explain Call Stack, memory, event loop

// ES5: callback 
/**
 * 
 */

// ES6 Promise, ES7 Async/Await 

function print() {
  console.log('hello');
}

setTimeout(print, 0);
console.log('Nice to meet you');

// Promises represent the completion of an asynchronous function. 
// They can be used as an alternative to chaining functions.

// ES5 (callbacks)
function doSecond() {
  console.log('Do second.')
}

function doFirst(callback) {
  setTimeout(function () {
    console.log('Do first.')

    callback()
  }, 500)
}

doFirst(doSecond)

// ES6 (Promises, Async/Await)
let doSecond = () => {
  console.log('Do second.')
}

let doFirst = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Do first.')

    resolve()
  }, 500)
})

doFirst.then(doSecond)