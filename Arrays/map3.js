// Criar map2

Array.prototype.map2 = function(callback) {
    let mappedArray = [];

    for(let i = 0; i < this.length; i++) {
        mappedArray.push(callback(this[i],i,this));
    }

    return mappedArray;

}

const carrinho = [
    '{"nome": "Lapis", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.45}',
    '{"nome": "Kit de canetas", "preco":43.45}',
    '{"nome": "caneta", "preco":1.00}'
]

// Retornar um array apenas com os preços

const convertToObject = json => JSON.parse(json);
const pickPrice = produto => produto.preco;


let arrayPreco = carrinho.map2(convertToObject).map2(pickPrice);

console.log(arrayPreco);