console.log(soma(3, 4)); // Já tem todas as funções carregadas pelo interpretador
//console.log(sub(3, 4));  sub is not defined
//console.log(mult(3, 4));  mult is not defined

// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function(x, y){
    return x - y;
}
console.log(sub(3, 4));


// named function expression (Uso reduzido)
const mult = function mult(x, y) {
    return x * y;
}