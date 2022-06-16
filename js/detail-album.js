let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idAlbum = qsOL.get('id')
console.log(idAlbum);

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${idAlbum}` 

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        document.querySelector("#bloqueAlbumDetailArtista").innerHTML = `<img src=${data.cover_medium} alt="${data.title}" class="title">
        <h1 class=""> Nombre: ${data.title}</h1>
        <a href="./detail-artist.html?id=${data.artist.id}" class="">
            <h2>${data.artist.name}</h2>
        </a>
        <a href="./detail-genres.html?id=${data.genres.data[0].id}" class="">
            <h3>Genero de musica: ${data.genres.data[0].name}</h3>
        </a>
        <h3>Fecha: ${data.release_date}</h3>`
        
    })
    .catch(function (error) {
        console.log(error);
    })



    fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (let i = 0; i < 5; i++) {
            document.querySelector("#bloqueAlbumDetailCanciones").innerHTML += `
            <a href="./detail-track.html?id=${data.tracks.data[i].id}" class="">
            <h1>canciones</h1>
                <article class="">
                    <img src="${data.cover_medium}" alt="sleeponthefloor" class="">
                    <h3 class="">${data.tracks.data[i].title_short}</h3>
                </article>`
        } 
        
    })
    .catch(function (error) {
        console.log(error);
    })
