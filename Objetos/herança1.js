const ferrari = {
    modelo:'F40',
    velMax:324
}

const volvo = {
    modelo:'v40',
    velMax: 200
}

class Cor {
    constructor(nome){
        this.nome = nome;
    }
}

class Teste {
    constructor(teste){
        this.teste = teste;
    }
}

// cor = {nome: 'Cor'};
// cor.prototype = new Teste;
// console.log('---------')
// console.log(cor.prototype);
// console.log(cor.__proto__);
// console.log(typeof cor.prototype);
// console.log(typeof cor.__proto__);
// console.log('---------')
// console.log(typeof cor);
// console.log(typeof cor.prototype);
// console.log(typeof Cor);


console.log(ferrari.__proto__);
console.log(typeof Object)
console.log(typeof Object.prototype);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(volvo.__proto__ === ferrari.__proto__);
console.log(Object.prototype.__proto__);

function MeuObjeto() {}
console.log(typeof Object,typeof MeuObjeto )
console.log(Object.prototype)
console.log(MeuObjeto.prototype)