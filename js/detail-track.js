let qs = location.search;
let qsObjLiteral = new URLSearchParams(qs);
let idATracks = qsObjLiteral.get(`id`);

alert(`capturando ${idATracks}`);