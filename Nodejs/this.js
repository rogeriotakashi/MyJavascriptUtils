console.log(this === global);
console.log(this === module.exports);

console.log(this === module);
console.log(this === exports);

console.log(module);
console.log(module.exports);

function logThis() {
    console.log('Dentro de uma função ...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);

    // Colocando algo no scopo global
    this.perigo = '...';
}


logThis();