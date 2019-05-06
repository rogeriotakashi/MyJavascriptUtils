console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'teste';


console.log(obj1);

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obje3 = new Obj('Mesa');

console.log(typeof obj2.nome);
console.log(typeof obje3.nome);
obj2.exec();
