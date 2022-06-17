
let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart`

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    let section = document.querySelector("#bloqueTracks");
    console.log(data);
    let tracks = data.tracks.data
    for (let i = 0; i < 5; i++) {
      section.innerHTML += `  <article class="myArticles">
      <a href="./detail-track.html?id=${tracks[i].id}">
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


fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    let section = document.querySelector("#bloqueArtistas");
    console.log(data);
    let artists = data.artists.data
    for (let i = 0; i < 5; i++) {
      section.innerHTML += `<article class="myArticles">
      <a href="./detail-artists.html?id=${artists[i].id}">
          <div class="bloque-item-lista">
              <h1>${artists[i].name}</h1>
              <img class="beatles" src="${artists[i].picture}" alt="foto1">
              <a href="./detail-artists.html?idArtista=${artists[i].id}"h>Ver detalle</a>
          </div>
      </a>
  </article>`;
    }
  })
.catch(function(error){
    console.log(error);
})

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    let section = document.querySelector("#bloqueAlbums");
    console.log(data);
    let albums = data.albums.data
    for (let i = 0; i < 5; i++) {
      section.innerHTML += `<article class="myArticles">
      <a href="./detail-album.html?id=${albums[i].id}">
          <div class="bloque-item-lista">
              <h1>${albums[i].title}</h1>
              <img class="beatles" src="${albums[i].cover}" alt="foto1">
          </div>
      </a>
  </article>`; 
    } 
  }) 
.catch(function(error){
    console.log(error);
}) 

document.querySelector("#formBusqueda").addEventListener("submit", function(e){

  if(!validarBusqueda()){
      e.preventDefault();    
  }
});
function validarBusqueda() {
  let nombre = document.querySelector("#nombre").value;
if (nombre=="") {
  alert("El campo de busqueda esta vacio")
  return false
}
if (nombre.length<4){
  alert("La busqueda no puede tener menos de 4 caracteres")
  return false
}
return true
}
