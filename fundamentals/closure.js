// Closure é o escopo criado quando uma função é declarado;
// Esse escopo permite a função acessar e manipular variáveis externas a função;

const x = 'Global';

function fora() {
    const x = 'local'
    const y = 'teste'
    const z = {
        a:'teste'
    }

    return function() {
        debugger;       
        return z.a;
    }

}

const minhaFuncao = fora();
console.log(minhaFuncao());