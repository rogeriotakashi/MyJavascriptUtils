const funcs = [];
const funcs2 = [];

// Conceito de Closures

for(var i = 0; i < 10; i++)
{
    funcs.push(function (){
        console.log(i);
    });
}

funcs[2]();
funcs[8]();


for(let i = 0; i < 10; i++)
{
    funcs2.push(function (){
        console.log(i);
    });
}


funcs2[2]();
funcs2[8]();