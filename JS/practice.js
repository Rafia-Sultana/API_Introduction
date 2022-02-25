function addPost() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayPost(data))
}
function displayPost(data) {
    const ul = document.getElementById('posts');

    for (const post of data) {
        console.log(post.id);
        const li = document.createElement('li');
        li.innerText = `completed: ${post.completed}`;
        ul.appendChild(li);
    }
}