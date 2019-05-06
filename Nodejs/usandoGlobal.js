require ('./VouParaOGlobal');

console.log(MinhaApp.saudacao());
console.log(global.MinhaApp.saudacao());

console.log(MinhaApp.nome);
MinhaApp.nome = 'Rogerio';

// A variavel fica passivel de alteração
console.log(MinhaApp.nome);

// Uma forma de resolver seria usando o Object.freeze( objeto que esta sendo carregado no global )