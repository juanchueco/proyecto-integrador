alert("hola")

let qs = location.search;
let qsObjLiteral = new URLSearchParams(qs);
let idPersonaje = qsObjLiteral.get(`id`);

const url= "https://developers.deezer.com/api/chart"
