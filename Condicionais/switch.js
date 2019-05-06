const teste = function(valor){
    switch (valor){
        case 'Rogerio': case 'Teste' :
            console.log("String");
            break;
        case 1: case 2: 
            console.log('Number');
            break;
        default:
            console.log('Default');
            break;
    }
}

teste('Rogerio');
teste('Teste');
teste(1);
teste(2);