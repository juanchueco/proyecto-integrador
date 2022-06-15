let qs = location.search;
let qsObjLiteral = new URLSearchParams(qs);
let idArtista = qsObjLiteral.get(`id`);

alert(`capturando ${idArtista}`);

const url = `https://api.allorigins.win/raw?url=${idArtista}`;



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
      <a href="./detalle-bands.html">
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
})







fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/${idArtista}")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {


    let section = document.querySelector("#imgDeArtistas");
    console.log(data);
    let artists = data.artists.data
    for (let i = 0; i < 5; i++) {
      section.innerHTML +=  `  <div class="padreD">
      <img class="rock" src="${artists[i].picture}" alt="">
  </div>
  <br>
  <article> 
      <div>
          <div class="rocky">
              <article>
                  <h2 class="rack">${artists[i].name}</h2>
              </article>
          </div>
  </article>>`;
    } 
  }) 



.catch(function(error){
    console.log(error);
})

