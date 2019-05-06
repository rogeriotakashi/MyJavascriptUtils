const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filho = Object.create(pai);
// filho.nome = 'Rogerio';

console.log(filho.corCabelo);

const filho2 = Object.create(pai, {
    nome: {value: 'olá', writable: false, enumerable:true}
});

console.log(filho2.nome);
filho2.nome = 'Teste'

console.log (`${filho2.nome} tem cabelo ${filho2.corCabelo}`)


console.log(Object.keys(filho));
console.log(Object.keys(filho2));

for(let key in filho2) {
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log("Por herança:"+key);
}