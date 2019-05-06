let chainOfCallbacks = new Map();
const sumCallback = (x,y) => x + y;
const minusCallback = (x,y) => x - y;

chainOfCallbacks.set('Sum',sumCallback)
chainOfCallbacks.set('Minus',minusCallback)

let x = 10;
let y = 5;

for (let callback of chainOfCallbacks.entries()) {
    console.log('Name: '+callback[0]+' | Result: '+ callback[1](x,y));
}

