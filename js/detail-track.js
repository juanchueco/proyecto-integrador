let qs = location.search;
let qsObjLiteral = new URLSearchParams(qs);
let idTracks = qsObjLiteral.get(`id`);
console.log(idTracks);
const contenido = document.querySelector('#contenido')
let url= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${idTracks}`
fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    contenido.innerHTML = `
    <div class="imagen">
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${idTracks}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    <div class="cajagrande">
        <article class="rectangulo">
          <i class= "blanco formatologo fa-solid fa-play"></i>
          <div> <p class="blanco">${data.title}</p>
          <h4 class="blanco"><a href="./detail-artists.html?id=${data.artist.id}"> ${data.artist.name} </a></h4> 
          <h4 class="blanco"><a href="./detail-album.html?id=${data.album.id}"> ${data.album.title} </a></h4> 
          <img class="imagen1" src= "${data.album.cover_medium}" alt="">
        </div>
       
      </article>

    </div>

    
    </div>` 
})







//favoritos//
let button= document.querySelectorAll('button')[1]
console.log(button)

let listaplaylist=[]
console.log(localStorage)
console.log(listaplaylist)
if(localStorage.getItem("playlist")&& localStorage.getItem("playlist")!=null){
    listaplaylist=JSON.parse(localStorage.getItem("playlist"))
}
if(listaplaylist.includes(idTracks)){
    button.innerHTML='<i class="fa-solid fa-heart"></i>'  
}
button.addEventListener("click", function(){
    if(listaplaylist.includes(idTracks)){
        listaplaylist.splice(listaplaylist.indexOf(idTracks),1)
        button.innerHTML='<i class="fa-regular fa-heart"></i>'  
        console.log(localStorage)
        console.log(listaplaylist)
}else{
    listaplaylist.push(idTracks)
    button.innerHTML='<i class="fa-solid fa-heart"></i>'
}
let guardarlocal=JSON.stringify(listaplaylist)
localStorage.getItem("playlist",guardarlocal)
console.log(localStorage)
console.log(listaplaylist)
})


   
    


