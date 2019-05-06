//Anonymous Function
const printSum = function (a,b) {
    console.log(a+b);
}

printSum(2,3);

// Arrow Function
const soma = (a, b) => {
    return a+b;
}

console.log(soma(2,3));

// Implicit Return

const subtracao = (a,b) => a-b;

console.log(subtracao(3,2));

const imprimir2 = a => console.log(a);

imprimir2("teste");