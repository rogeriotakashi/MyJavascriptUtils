
let funcao = `console.log('Iniciando funcao');`;

let sum = `return a + b;`;
let sub = `return a - b;`;
let mult = `return a * b;`;
let div = `return a / b;`;

let op = 'sum';

switch(op){
    case 'sum': funcao += sum; break;
    case 'sub': funcao += sub; break;
    case 'mult': funcao += mult; break;
    case 'div': funcao += div; break;
}

let example = new Function('a', 'b', funcao);

console.log( example(1, 2) );