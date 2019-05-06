// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }

//     falar() {
//         console.log(`Meu nome é: ${this.nome}`);
//     }
// }

// const p1 = new Pessoa('Rogerio');
// p1.falar();


// function pessoa(nome) {
//     this.falar = function(){
//         console.log(`Meu nome é: ${nome}`);
//     }
// }

// const p2 = new pessoa('Rogerio 2');
// p2.falar();

// function pessoa(nome) {
//     this.falar = () => console.log(`Meu nome é: ${nome}`);
// }

// const p2 = new pessoa('Rogerio 2');
// p2.falar();

console.log(this === module.exports)
this.nome = 'GGGGG';
let falar = () => console.log(`Teste: ${module.exports.nome}`);
falar();

console.log(this === module.exports)

let falar2 = function() {
    console.log(`Teste2: ${this.nome}`);
} 
falar2();