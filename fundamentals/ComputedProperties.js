let bag = {
  [ outer(' Takashi') ]: outer(' Hirata'),

};

console.log(bag['Rogerio Takashi'])

function outer(sobrenome) {

    var name = 'Rogerio';

    function doSomething(sobrenome) {
        name += sobrenome;
        return name;
    }

    return doSomething(sobrenome);
}