const root = document.getElementById('root');

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
}

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
  
  // async function asyncCall() {
  //   console.log('calling');
  //   const result = await resolveAfter2Seconds();
  //   console.log(result);
  //   // expected output: "resolved"
  // }
  
  // asyncCall();

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