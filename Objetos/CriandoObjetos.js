// usando a notação literal
const objct1 = {}
console.log(objct1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Produto (nome,preco,desc){
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto("Rogerio",7.99, 0.15);
const p2 = new Produto("Notebook",3000.0,0.30);

console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

// Função Factory

function criarFuncionario(nome,salario,faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas); 
        }
    }
}

const f1 = criarFuncionario("Rogerio",7000.0,4);
const f2 = criarFuncionario("Teste",3000.0,0);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Teste";
console.log(filha);

// Uma funcao famosa que retorna objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON.info);