const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios'); // Client http

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;

    // mulher chinesa com menor salario
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);

    console.log(func);
});