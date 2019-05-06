// function hash() {
//   console.log( [].join.call(arguments) ); // 1,2
// }

// function find() {
//   console.log(typeof arguments);
//   console.log(arguments);
//   var args = Array.prototype.slice.call(arguments)
//   return args.filter(a => a.includes('o'))
// }

// console.log(find("orchid", "tulip", "rose", "lilac"));

function hash() {
    console.log([].join.call(arguments)); 
}
hash(1,2,3,4,5,6,7,8,9);


