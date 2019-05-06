const valores = [7.7 ,6.5 ,3.6, 9.0];

console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[5] = 10.0;

console.log(valores);
console.log(valores.length);

valores.push({id: 3},false,null,'teste');
console.log(valores);

console.log( valores.pop() );

console.log(valores);

console.log(typeof valores);