const pilotos = ['Vettel', 'Alonso','Raikkonen','Massa'];
pilotos.pop() // Remove o ultimo

console.log(pilotos);

pilotos.push('Rogerin');
console.log(pilotos);

pilotos.shift(); // Remove da primeira posuição
console.log(pilotos);

pilotos.unshift('Leandrin');
console.log(pilotos);

// Splice pode adicionar e remover elementos

const algunsPilotos = pilotos.slice(1);
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(2,4);
console.log(algunsPilotos2);