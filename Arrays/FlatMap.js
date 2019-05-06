const escola = [{
    nome:'Turma 1',
    alunos:[{
        nome:'Gustavo',
        nota: 8.1
        },
        {
            nome:'Ana',
            nota: 9.3
    }]
},  {
    nome:'Turma 1',
    alunos:[{
        nome:'Gustavo',
        nota: 8.1
        },
        {
            nome:'Ana',
            nota: 9.3
    }]
}]

const getNotaAluno = a => a.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno);

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);

console.log([].concat([ 8.1, 9.3 ], [ 8.1, 9.3 ]));

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback));   
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);