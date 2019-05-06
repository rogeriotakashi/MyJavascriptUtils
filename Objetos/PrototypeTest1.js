function Rabbit() {}

console.log(Rabbit.prototype.constructor)
console.log(Rabbit.prototype)
console.log(Rabbit)

console.log(typeof Rabbit.prototype.constructor)
console.log(typeof Rabbit.prototype)
console.log(typeof Rabbit)

console.log('-------------------------------------------')
let rabbit = new Rabbit();
console.log(rabbit);
console.log(rabbit.prototype);
console.log(rabbit.constructor);
console.log(typeof rabbit);
console.log(typeof rabbit.prototype);
console.log(typeof rabbit.constructor);
console.log(rabbit.constructor == Rabbit.prototype.constructor)
//console.log(typeof rabbit.prototype.constructor == rabbit.constructor) prototype == undefined