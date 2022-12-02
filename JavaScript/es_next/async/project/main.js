const root = document.getElementById('root');

/**
 * ASYNC / Promise example
 * 
 * I how to handle success in asynchronous code?
 * II how to handle error in asynchronous code?
 * 
 * with promise
 * (I) then
 * (II) catch - always last in chain (myPromise.then().then().catch())
 * 
 * with async
 * (I) Use await to handle succeeded flow
 * (II) Use try/catch to handle failed flow
 *  - Remember async/await is just a promise, we can use catch after calling async function either (but stick to try/catch)
 * 
 * Simplification
 * type    | success  | error
 * promise | .then    | .catch
 * async   | await    | try/catch
 * 
 * async function similar to new Promise()
 * await similar to then()
 * 
 * PRACTICE: wrote fetch example in async syntax (it's promise by default)
 */

async function display(content) {
  let res = await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
  let json = await res.json();

  console.log(json)
}

const futureData = fetch(`https://jsonplaceholder.typicode.com/todos/2`)

console.log('fetch',futureData);
display()
// futureData.then(display).then(res => console.log(futureData))
// .then(json => console.log(json))

console.log('sync code here');

// root.addEventListener('load', getPosts)

// FETCH example

// function getPosts() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// async version

async function getPosts() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let responseJSON = await response.json();
  console.log(responseJSON);
    
}
getPosts();


function getPost(id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/2`)
    .then(response => response.json())
    .then(json => console.log(json))
}

function createPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

function editPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

function deletePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
}
// window.addEventListener('load', getPosts)

// Example 1
// function LevelTwo() {
//   console.log("Inside Level Two!")
// }
 
// function LevelOne() {
//   LevelTwo()
// }
 
// function main() {
//   LevelOne()
// }
 
// main()

// Example 2

  // add() function is called with arguments a, b
  // and callback, callback will be executed just 
  // after ending of add() function

  // function add(a, b , callback){
  // document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>");
  // callback();
  // }
    
  // // disp() function is called just
  // // after the ending of add() function 
  // function disp(){
  // document.write('This must be printed after addition');
  // }
    
  // // Calling add() function
  // add(5,6,disp);

  // Example 3

  // function resolveAfter2Seconds() {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve('resolved');
  //     }, 2000);
  //   });
  // }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();

  // example 4

  
// var promise = new Promise(function(resolve, reject) {
//   const x = "geeksforgeeks";
//   const y = "geeksforgeeks"
//   if(x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });
   
// promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });