// concepts to explain Call Stack, memory, event loop

// ES5: callback 
/**
 * Resources: 
 * https://betterprogramming.pub/3-ways-to-write-asynchronous-code-in-javascript-b8d17e60df06
 * https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * Event loop: https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/
 * Callbacks: https://www.geeksforgeeks.org/javascript-callbacks/?ref=lbp
 * Promises: https://www.geeksforgeeks.org/javascript-promises/?ref=gcse
 * https://www.geeksforgeeks.org/es6-promises/?ref=lbp
 * Async/Await: https://www.geeksforgeeks.org/async-await-function-in-javascript/?ref=lbp
 * 
 * https://www.jsv9000.app/
 * https://www.youtube.com/watch?v=tiRhFGnCltw
 */

// ES6 Promise, ES7 Async/Await 

// function print() {
//   console.log('hello');
// }

// setTimeout(print, 0);
// console.log('Nice to meet you');

// // Promises represent the completion of an asynchronous function. 
// // They can be used as an alternative to chaining functions.

// // ES5 (callbacks) ***********
// function doSecond() {
//   console.log('Do second.')
// }

// function doFirst(callback) {
//   setTimeout(function () {
//     console.log('Do first.')

//     callback()
//   }, 500)
// }

// doFirst(doSecond)

// //

// function displayFunc(content) {
//   console.log(content);
// }

// function calcFunc(p1, p2, displayFunc) {
//   let result = p1 + p2;
//   displayFunc(result);
// }

// calcFunc(58, 2, displayFunc);

// //

// setTimeout(myTimeOut, 2000);

// function myTimeOut() {
//     console.log("This function was called after 2 seconds.");
// }

// // 
// setTimeout(function () {
//   randomFunction("Was called after 2 seconds.");
// }, 2000);

// function randomFunction(content) {
//   console.log(content);
// }

// // ES6 (Promises, Async/Await) ***********

// let promise = new Promise(function (success, error) {
//   success();
//   //or
//   error();
// });
// promise.then(
//   function(value){
//       // do something if promise was kept
//   },
//   function(error){
//       // be upset and sign divorce paper!
//   }
// );

// function displayFunc(content) {
//   console.log(content);
// }

// let promiseObj = new Promise((resolve, reject) => {
//   let x = 0;
//   if (x === 0) {
//     setTimeout(() => {
//       resolve("Granted!");
//     }, 1000)
//   } else {
//     setTimeout(() => {
//       reject("DECLINED!!!");
//     }, 1000)
//   }
// });
// console.log(promiseObj);
// promiseObj.then((value) => {
//   displayFunc(value);
// }, (error) => {
//   displayFunc(error);
// });

// //

// let doSecond = () => {
//   console.log('Do second.')
// }

// let doFirst = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Do first.')
//     reject('greska')
//     // resolve()
//   }, 500)
// })

// doFirst.then(doSecond).catch(err => console.error(err));
// console.log(doFirst);
//

// (() => {

//   console.log('this is the start');

//   setTimeout(() => {
//     console.log('Callback 1: this is a msg from call back');
//   }); // has a default time value of 0

//   console.log('this is just a message');

//   setTimeout(() => {
//     console.log('Callback 2: this is a msg from call back');
//   }, 0);

//   console.log('this is the end');

// })();

//

// async function displayFunc() {
//   let promiseObj = new Promise(function (resolve, reject) {
//       setTimeout(function () {
//           // resolve("Was called after f****** 4 seconds!");
//           reject('eerororor')
//       }, 1000);
//   });
//   console.log(await promiseObj.catch(error => console.error(error)));
// }

// let promiseObj = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//       resolve("Was called after f****** 4 seconds!");
//   }, 4000);
// });
// // console.log(await promiseObj);
// promiseObj.then(res => {
//   console.log('res: ', res);
// })
// displayFunc();




// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"

const getData = async() => {
  var data = "Hello World";
  return data;
}
console.log('Before then', getData());
getData().then(data => console.log(data));