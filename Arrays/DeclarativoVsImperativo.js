const alunos = [
    { nome: 'joao', nota:7.0, bolsista: false },
    { nome: 'Rogerio', nota:9.0, bolsista: false },
    { nome: 'Pedro', nota:2.0, bolsista: false },
    { nome: 'Maria', nota:10.0, bolsista: true }
]

// Imperativo
let total = 0;
for (let i = 0; i < alunos.length; i++){
    total += alunos[i].nota;
}

console.log(total / alunos.length);


// Declarativo
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);

console.log(total2 / alunos.length);