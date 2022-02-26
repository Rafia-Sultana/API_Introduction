function todo() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayTodo(data))
}

function displayTodo(data) {
    const toDoList = document.getElementById('todoList');
    for (const task of data) {
        const div = document.createElement('div');
        div.innerHTML = `Title : <img src=${task.url}>`
        toDoList.appendChild(div);
    }
}