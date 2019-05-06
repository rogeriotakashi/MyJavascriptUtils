const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtoCaro = produto => produto.preco > 2000;
const isFragil = produto => produto.fragil;

console.log(produtos.filter(produtoCaro).filter(isFragil));

