// par nome/valor
const saudacao = 'Ola' //Contexto lexico 1

function exec(){
    const saudacao = 'oi'; // Contexto Lexico 2

    return saudacao;
}

// Objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Rogerio',
    idade: 22,
    peso:90.0,
    endereco: {
        logradouro: 'Rua teste',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);