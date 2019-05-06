let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  console.log( typeof Rabbit.prototype );
  console.log( Object.prototype );
  console.log( typeof Array.prototype );

  Array.teste = "Ola";

  console.log(Array.teste);
  console.log(typeof Array.teste);


  Array.prototype.teste2 = "Mundo"
  console.log(Array.prototype.teste2);
  console.log(typeof Array.prototype.teste2);

  console.log([].teste)
  console.log([].teste2)


  console.log(typeof [].__prototype__)
  console.log(typeof [].teste)
  console.log(typeof [].teste2)

