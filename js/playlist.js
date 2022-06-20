let playlist=[]
if(localStorage.getItem("playlist")&&localStorage.getItem("playlist")!=null){
    playlist=JSON.parse(localStorage.getItem("playlist"))
}
if(playlist.length==0){
    document.querySelector(".nombreplaylisyt").innerHTML="no hay elementos en favoritos" 
}
let lista= document.querySelector(".divplaylist")
console.log(playlist)
for (let i=0;i<playlist.length;i++){
    let url= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${playlist[i]}`
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
       lista.innerHTML += `<div class="divplaylist">
       <i class="fa-solid fa-star"></i> 
       <li class="divplaylist2" type="none" ><img src="${data.album.cover_medium}" alt=""><a href="detail-track.html?id=${data.id}">${data.title}</a><a href="detail-artists.html?id=${data.artist.id}">${data.artist}</a><a href="detail-album.html?id=${data.album.id}">${data.album.title}</a></li> 
   </div>`
    })
    
}