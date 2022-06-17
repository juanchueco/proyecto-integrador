
let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre` 

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
