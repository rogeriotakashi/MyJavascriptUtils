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
let todosSaoBolsistas = alunos.map(getBolsista).reduce(isBolsista);
console.log(todosSaoBolsistas);

// Desafio 2: Algum aluno é bolsista?
let algumAlunoEhBolsista = alunos.map(getBolsista).reduce(isAlunoBolsista);
console.log(algumAlunoEhBolsista);