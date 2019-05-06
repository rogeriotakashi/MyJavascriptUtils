const notas = [1, 2, 3, 4, 5];

//Percorre somente o valor do indice
for (i in notas) {
    console.log(i, notas[i]);
}

const  pessoa = {
    nome: 'Rogerio',
    sobrenome: 'Hirata',
    idade: 22,
    peso: 62
}

for (atributo in pessoa) {
    console.log(` ${atributo} = ${pessoa[atributo]}`);
}
