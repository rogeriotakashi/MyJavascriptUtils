Array.prototype.reduce2 = function(callback,valorInicial){
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador = indiceInicial || this[0];
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador;
}

const alunos = [
    { nome: 'joao', nota:7.0, bolsista: false },
    { nome: 'Rogerio', nota:9.0, bolsista: false },
    { nome: 'Pedro', nota:2.0, bolsista: false },
    { nome: 'Maria', nota:10.0, bolsista: true }
]

const getBolsista = (aluno) => aluno.bolsista;
const isBolsista = (resultado, atual) => resultado && atual;
const isAlunoBolsista = (resultado, atual) => resultado || atual;

// Desafio 1: Todos os alunos são bolsistas?
let todosSaoBolsistas = alunos.map(getBolsista).reduce2(isBolsista);
console.log(todosSaoBolsistas);

// Desafio 2: Algum aluno é bolsista?
let algumAlunoEhBolsista = alunos.map(getBolsista).reduce2(isAlunoBolsista);
console.log(algumAlunoEhBolsista);