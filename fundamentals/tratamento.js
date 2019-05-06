function tratarErroException (erro){
    //throw new Error('...');
    throw{
        nome: erro.nome,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeCaps(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!');
    } catch (e) {
        tratarErroException(e);
    } finally {
        console.log('Final');
    }
}


const obj = { nome: 'Rogerio'}
imprimirNomeCaps(obj);