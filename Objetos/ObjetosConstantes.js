// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'};
pessoa.nome = 'Pedro';
console.log(pessoa.nome);

// pessoa = { nome: 'Ana' };
// console.log(pessoa.nome);

Object.freeze(pessoa);
pessoa.nome = 'Rogerio';
pessoa.end = 'abc';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa.end);

const pessoa2 = Object.freeze({
    nome : 'Rogerio'
});
pessoa2.nome = 'Teste';
console.log(pessoa2.nome);