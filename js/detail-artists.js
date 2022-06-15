let qs = location.search;
let qsObjLiteral = new URLSearchParams(qs);
let idArtists = qsObjLiteral.get(`id`);

alert(`capturando ${idArtists}`);