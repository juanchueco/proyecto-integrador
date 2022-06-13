 HEAD
let proxy = "https://api.allorigins.win/raw?url="
let endPoint = "https://developers.deezer.com/api/chart"
let url= "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/chart"


    
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

    let section = document.querySelector(".bloqueNav");
    console.log(data);
    let album = data.artists.data
    for (let i = 0; i < artists.length; i++) {
      section.innerHTML += ` <article><img src=${artists[i].image} alt='' />
      <p>Name:${artists[i].name} </p>
      <p>Status: ${artists[i].status}</p>  
      <a href="./detalle.html?id=${artists[i].id}">ir a detalle</a>
      </article>`;
    }
  })
.catch(function(error){
    console.log(error);
})

