function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('New Aula',123);
const aula2 = new Aula('Outra Aula',456);

console.log(aula1, aula2);

// Simular operador new

function novo(f, ...params){
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj,params);
    return obj;
}

const aula3 = novo(Aula, "Teste",789)
console.log(aula3)
console.log(aula3.__proto__)