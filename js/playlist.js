let recuperoStorage=localStorage.getItem("favoritos");
let favoritos = JSON.parse(recuperoStorage);

/*capturar el elemento en el DOM*/;

let section = document.querySelector(".lista");

let canciones = "";

/*evaluar el localstorage*/

if(favoritos == null || favoritos.lenght == 0) {
    section.innerHTML = '<p>no hay items en favoritos</p>';
} else {
            /*si contiene elementos*/
            for (let i = 0; i <favoritos.length; i++){
                    /*buscar el personaje*/
                    let URL = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/"+favoritos[i];

                    fetch(URL)
                    .then(function(response){
                    return response.json();
                    })
                    .then(function(data){
                    cancionesFavoritos += `<article>
                    <img src=${data.image}>
                    <p>Nombre: ${data.name}</p>
                    <a href="/detalle.html?id=${data.id}">Ir a detalle</a>
                    </article>
                    <hr>`
                    section.innerHTML = cancionesFavoritos;
                    }).catch(function(error){
                    console.log(error)
                    })
            }
            
            
}