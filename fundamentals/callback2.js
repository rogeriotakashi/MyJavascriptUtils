const notas = [7.0,3.0,8.0,5.0,9.0,10.0,2.0];

// Sem callback
let notasBaixas = [];

for(let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

// Com callback
let notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2);


// Arrow Function callback
const notasMenorQue7 = (nota) => nota < 7;

let notasBaixas3 = notas.filter(notasMenorQue7);

console.log(notasBaixas3);