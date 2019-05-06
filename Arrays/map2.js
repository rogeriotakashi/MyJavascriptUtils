const carrinho = [
    '{"nome": "Lapis", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.45}',
    '{"nome": "Kit de canetas", "preco":43.45}',
    '{"nome": "caneta", "preco":1.00}'
]

// Retornar um array apenas com os preços

const convertToObject = json => JSON.parse(json);
const pickPrice = produto => produto.preco;


let arrayPreco = carrinho.map(convertToObject).map(pickPrice);

console.log(arrayPreco);