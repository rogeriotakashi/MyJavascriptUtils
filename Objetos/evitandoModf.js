// Object.preventExtensions (da para excluir properties e alterar valores)
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
});

console.log("Extensivel:", Object.isExtensible(produto));
produto.novo = 'Teste'; // dont work
produto.nome = 'Rogerio'; // ok
delete produto.tag // ok
console.log(produto)

// Object.seal (só da para alterar valores dos atributos)
const pessoa = { nome: 'Rogerio', idade: 23 }
Object.seal(pessoa);

console.log("Selado:", Object.isSealed(pessoa));
pessoa.novo = 'Teste'; // dont work
pessoa.nome = 'Teste'; // ok
delete pessoa.nome// dont work
console.log(pessoa)