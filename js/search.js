let qs = location.search;
let qsOL = new URLSearchParams(qs)
let nombre = qsOL.get('nombre')
console.log(nombre);

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart`

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
document.querySelector("#nombreBusqueda").innerHTML=nombre;
    let section = document.querySelector("#resultadoBusqueda");
    console.log(data);
    let artists = data.artists.data
   let cantidad = 0
    for (let i = 0; i < artists.length; i++) {
       
        if (artists[i].name.toLowerCase().indexOf(nombre)>-1) {
           cantidad++
        
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
    }
    if (cantidad==0) {
        section.innerHTML="No hay resultados para la busqueda"
    }
  })
.catch(function(error){
    console.log(error);
})