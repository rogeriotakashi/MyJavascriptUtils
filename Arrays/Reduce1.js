const alunos = [
    { nome: 'joao', nota:7.0, bolsista: false },
    { nome: 'Rogerio', nota:9.0, bolsista: true },
    { nome: 'Pedro', nota:2.0, bolsista: false },
    { nome: 'Maria', nota:10.0, bolsista: true }
]

const resultado = alunos.map( a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
}, 10)

console.log(resultado)