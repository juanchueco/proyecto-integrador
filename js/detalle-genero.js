let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idGenero = qsOL.get('id')
console.log(idGenero);

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`
let endpoint2 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${idGenero}/artists`

fetch(endpoint)
    .then(function (response) {
        return response.json(); 
    })
    .then(function (data) {
        console.log(data)
        for (let i = 1; i < 6; i++) {
            document.querySelector("#cajaGenerosDetalle").innerHTML += `  <h1 class="genero"><i class="fa-solid fa-guitar-electric">${data.data[i].name}</i> <i class="fa-solid fa-music"></i></h1>
        <div class="padreD">
            <img class="rock" src="${data.data[i].picture}" alt="">
        </div>`

        }
    })
    .catch(function (error) {
        console.log(error);
    })

    fetch(endpoint2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (let i = 0; i < 6; i++) {
            document.querySelector("#cajaDetalleArtistas").innerHTML += `<article class="myArticles">
           
            <div class="bloque-item-lista">
                <h1>${data.data[i].name}</h1>
                <img class="beatles" src="${data.data[i].picture}" alt="foto1">
            </div>
      
    </article>`

        }
    })
    .catch(function (error) {
        console.log(error);
    })

