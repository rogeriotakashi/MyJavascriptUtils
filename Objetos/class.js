class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome;
        this.valor = valor;
    }
}

class Cor {
    constructor(nome){
        this.nome = nome;
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
        this.cores = [];
    }

    addLancamentos(... lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    addCores(... cores){
        cores.forEach(cor => this.cores.push(cor));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach( l => valorConsolidado += l.valor )
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salarios',45000);
const contaDeLuz = new Lancamento('Luz',-500);
const branco = new Cor('Branco');
const vermelho = new Cor('Vermelho');

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario, contaDeLuz);
contas.addCores(branco,vermelho);

console.log(contas.cores.map( cor => cor.nome));
console.log(contas.sumario());
