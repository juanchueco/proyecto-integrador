let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idArtista = qsOL.get('id')
console.log(idArtista);

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idArtista}`

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        document.querySelector('#imgDeArtistas').innerHTML = `<a style="text-decoration:none" href="./detail-artist.html?id=${data.id}">
        <article class="">
            <div class="artistahija2">
                <img class="artistaimg1" src=${data.picture_medium} alt="Music of the spheres">
            </div>
        </article>
    </a>`

        document.querySelector('#bloqueArtistas').innerHTML = data.name
      
        fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/${idArtista}")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let section = document.querySelector("#bloqueArtistas");
          console.log(data);
          let albums = data.albums.data
          for (let i = 0; i < 5; i++) {
            section.innerHTML += ` <article class="myArticles">
            <a href="./detalle-bands.html?id=${data.albums.data[i]}">
                <div class="bloque-item-lista">
                    <h1>${albums[i].title}</h1>
                    <img class="beatles" src="${albums[i].cover}" alt="foto1">
                 
                </div>
            </a>
        </article> 
      `;
          } 
        })
      
      
      
      
      .catch(function(error){
          console.log(error);
      })})
