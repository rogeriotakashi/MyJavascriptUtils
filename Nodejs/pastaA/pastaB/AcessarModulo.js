const moduloA = require('../../moduloA');
//const moduloA = require('/home/softvaro/workspace/Javascript/Nodejs/moduloA.js');

console.log(moduloA.bemVindo);

const saudacao = require('saudacao');
console.log(saudacao.ola);

const c = require('./pastaC');
console.log(c.ola);

// const http = require('http');
// http.createServer((req,res) => {
//     res.write('Bom dia')
//     res.end()
// }).listen(8080);