let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idGenero = qsOL.get('id')
console.log(idGenero);




let endpoint = `https://api.allorigins.win/get?url=https://api.deezer.com/genre/${idGenero}/artists` 

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (let i = 0; i < 6; i++) {
        document.querySelector("#cajaGeneros").innerHTML += ` <article class="myArticles">
        <a href="./detalle-genero.html?id=${data.data[i].id}">
            <div class="bloque-item-lista">
                <h2>${data.data[i].name}</h2>
                <img class="beatles" src="${data.data[i].picture_medium}" alt="foto1">
             
            </div> 
        </a>
    </article>`
        
    }}) 
    .catch(function (error) {
        console.log(error);
    })
