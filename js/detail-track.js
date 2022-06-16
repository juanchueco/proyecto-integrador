let qs = location.search;
let qsObjLiteral = new URLSearchParams(qs);
let idTracks = qsObjLiteral.get(`id`);

alert(`capturando ${idTracks}`);