function makeWorker() {
    debugger;
    let name = "Pete";
  
    return function() {
      let inner = "Rogerio"
      alert(name);
    };
  }
  
  let teste = "John";
  
  // create a function
  var work = makeWorker();
  
