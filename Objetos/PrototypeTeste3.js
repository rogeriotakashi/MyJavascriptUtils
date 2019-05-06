function Rabbit() {}

Rabbit.prototype.jump = {
  jumps: true
};

Rabbit.jump = {
    jumps: false
};
  

Rabbit.prototype = {
    hop: true,
    constructor: Rabbit
}

let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false
console.log(rabbit.constructor);
console.log(rabbit.constructor.jump);
console.log(Rabbit.prototype.jump);
console.log(Rabbit.prototype.constructor == rabbit.__proto__.constructor)
console.log(Rabbit.prototype == rabbit.__proto__)
