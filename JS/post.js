function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => json())
        // .then(data => displayPosts(data))
        .then(response => response.json())
        .then(data => displayPosts(data))
}
loadPosts();
function displayPosts(data) {
    const section = document.getElementById('posts');
    for (const post of data) {
        //console.log(post.id);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h5>${post.title}</h5>
        <h4> ${post.body}</h4>`
        section.appendChild(div);
        //console.log(post);

    }
}