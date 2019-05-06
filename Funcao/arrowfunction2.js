const obj = {}

let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global);


comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);


console.log('---------------------------------------------------------')

let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(global);
comparaComThisArrow(module.exports);
comparaComThisArrow(obj);

console.log(module.exports);


comparaComThisArrow = comparaComThisArrow.bind(obj);

comparaComThisArrow();