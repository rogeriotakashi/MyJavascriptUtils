function Rabbit(name) {
    this.name = name;
}
  
let rabbit = new Rabbit("White Rabbit");
  
let rabbit2 = new rabbit.constructor("Black Rabbit");

console.log(rabbit);
console.log(rabbit2);