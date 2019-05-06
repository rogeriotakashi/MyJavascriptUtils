console.log(this === module.exports);

this.abc = 'teste';
global.abc = 'teste 2';

console.log(global.abc, module.exports.abc);