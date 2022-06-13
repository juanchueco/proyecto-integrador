fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/chart")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    let section = document.querySelector(".bloqueNav");
    console.log(data);
    let tracks = data.tracks.data
    for (let i = 0; i < tracks.length; i++) {
      section.innerHTML += ` <article><img src=${tracks[i].image} alt='' />
      <p>Name:${tracks[i].name} </p>
      <p>Status: ${tracks[i].status}</p>  
      <a href="./detalle.html?id=${tracks[i].id}">ir a detalle</a>
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

    let section = document.querySelector(".bloqueNav");
    console.log(data);
    let album = data.albums.data
    for (let i = 0; i < albums.length; i++) {
      section.innerHTML += ` <article><img src=${albums[i].image} alt='' />
      <p>Name:${albums[i].name} </p>
      <p>Status: ${albums[i].status}</p>  
      <a href="./detalle.html?id=${albums[i].id}">ir a detalle</a>
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

    let section = document.querySelector("#bloqueArtistas");
    console.log(data);
    let artista = data.artists.data
    for (let i = 0; i < 5; i++) {
      section.innerHTML += `<article class="myArticles">
      <a href="./detail-artists.html">
          <div class="bloque-item-lista">
              <h1>${artista[i].name}</h1>
              <img class="beatles" src="${artista[i].picture}" alt="foto1">
              <a href="./detail-artists.html?idArtista=${artista[i].id}"h>Ver detalle</a>
          </div>
      </a>
  </article>`;
    }
  })
.catch(function(error){
    console.log(error);
})
