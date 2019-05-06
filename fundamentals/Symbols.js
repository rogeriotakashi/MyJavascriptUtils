'use strict';

// id is a new symbol
let id = Symbol();

// id2 is a symbol with the description "id"
let id2 = Symbol("id2");
let id3 = Symbol("id3");

console.log(id2 == id3); // false
console.log(id);
console.log(id2.toString());
console.log(id2.description);
let id2Again = Symbol.for("id2");
console.log("aqui:", id2 === id2Again ); // false


// read from the global registry 
let id4 = Symbol.for("id4"); // if the symbol did not exist, it is created

// read it again
let idAgain = Symbol.for("id4");

// the same symbol
console.log( id4 === idAgain ); // true


let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name from symbol
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id