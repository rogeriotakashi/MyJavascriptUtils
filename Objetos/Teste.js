
let obj = {
    texto: 'Texto Dentro Objeto',

    inner(){
        debugger;
        console.log("Before Apply:")
        this.teste.inner.apply(this);
    },   
    teste: {
        inner() {
            this.outro.outroInner.apply(this);
        }
    },
    outro: {
        outroInner() {
            console.log("Inside Outro Inner")
            console.log(this.texto);
        }
    },
    
}


obj.inner();
obj.teste.inner();


