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
window.addEventListener('load', getPosts)