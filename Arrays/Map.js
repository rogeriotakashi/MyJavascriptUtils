const nums = [1, 2, 3, 4, 5]

//For com próposito
//O Map gera um outro Array, mantendo o Array original intacto
let resultado = nums.map(function(e){
    return e * 2;
});

console.log(resultado);


const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

let resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado2);