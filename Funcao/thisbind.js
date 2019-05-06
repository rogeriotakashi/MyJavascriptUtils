function Pessoa() {
    this.idade = 0;
    console.log(this);

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }/*.bind(this)*/,1000);
}

new Pessoa