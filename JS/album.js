function albumShow() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(album => albumDisplay(album))

}
albumShow();

function albumDisplay(album) {
    const full_album = document.getElementById('fullAlbum');
    for (const picture of album) {
        //console.log(picture.id);
        const div = document.createElement('div');
        div.classList.add('albums');
        div.innerHTML = `ID: ${picture.id} 
        title: ${picture.title}
        `
        full_album.appendChild(div);
    }
}