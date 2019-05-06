let john = { name: "John" };

let arr = [john];

console.log(john); // Overwrite da referencia
console.log(arr[0]); // john ainda está na memória

arr = null;
console.log(arr); // john não está mais na memória

// let map = new Map();
// map.set(john, "Teste");

// john = null; // overwrite the reference

// // john is stored inside the map,
// // we can get it by using map.keys()

// console.log(map.get(john));

// for(let keyValue of map.entries())
//     console.log(keyValue);