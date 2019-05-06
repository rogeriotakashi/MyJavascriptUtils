//High Order Function
// Criar de forma literal
function fun1() { };

// Armazenar em uma variavel
const fun2 = function() { };

// Armazenar em um array
const array = [fun1, fun2];

const obj = {};
obj.falar = function () { return 'Opa' };

console.log(obj.falar());

function run(fun){
    console.log(fun());
}

run(obj.falar);


function soma(a, b){
    return function(c) {
        return a+b+c;
    }
}

console.log(soma(2,3)(4));

const cincoMais = soma(2,3);
console.log(cincoMais(3));