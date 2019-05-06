let x = 1; // No effect on numbers
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let z =5465498491
console.log( (+z)+1 );   // 0