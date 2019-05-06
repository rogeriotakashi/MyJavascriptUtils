console.log(typeof Array);
console.log(typeof new Array);
console.log(typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia','Rogerio','Dirso'];
console.log(aprovados[0],aprovados[1],aprovados[2],aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Teste');

console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8]=== undefined);

console.log(aprovados);
aprovados.sort();
console.log(aprovados);


aprovados = ['Bia','Carlos','Julio'];
aprovados.splice(1,1,"Novo Elemento","Novo Elemento 2");
console.log(aprovados);