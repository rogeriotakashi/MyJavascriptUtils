console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;


exports = null;


exports = {
    name: 'Teste'
}

console.log(module.exports);

module.exports = {
    teste: true
}

console.log(module.exports);

