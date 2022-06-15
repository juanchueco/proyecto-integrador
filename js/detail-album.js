let qs = location.search;
let qsObjLiteral = new URLSearchParams(qs);
let idAlbums = qsObjLiteral.get(`id`);

alert(`capturando ${idAlbums}`);

const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart${idAlbums}`;




















fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/${idAlbums}")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {


    let etiquetaTitle = document.querySelector(".title");
    let etiquetaCover = document.querySelector(".cover");
    etiquetaTitle.innerHTML = `title: ${data.title}`;
    etiquetaCover.innerText = `cover: ${data.cover}`;



    let section = document.querySelector("#bloqueAlbumDetailArtista");
    console.log(data);
    let albums = data.albums.data
    for (let i = 0; i < 5; i++) {
      section.innerHTML += `<article class="myArticles">
      <a href="./detail-artists.html">
          <div class="bloque-item-lista">
              <h1>${albums[i].title}</h1>
              <img class="beatles" src="${albums[i].cover}" alt="foto1">
              <a href="./detail-artists.html?idArtista=${albums[i].id}"h>Ver detalle</a>
          </div>
      </a>
  </article>`;
    }
  })
.catch(function(error){
    console.log(error);
})






fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/chart")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    let section = document.querySelector("#bloqueAlbumDetailCanciones");
    console.log(data);
    let tracks = data.tracks.data
    for (let i = 0; i < 5; i++) {
      section.innerHTML += `  <article class="myArticles">
      <a href="./detail-track.html">
          <div class="bloque-item-lista">
              <h1>${tracks[i].title}</h1>
              <img class="beatles" src="${tracks[i].artist.picture}" alt="foto1">
              <a href="./detail-track.html?idArtista=${tracks[i].id}"h>Ver detalle</a>
          </div>
      </a>
  </article>`;
    } 
  })
.catch(function(error){
    console.log(error);
})
