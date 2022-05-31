let pessoa = ["Isac", 30, 1.83, 30, true,["musica", "café"]];
console.log(pessoa.length);

//push

pessoa.push("verde");
console.log(pessoa);

//pop

let lasElement = pessoa.pop();
console.log(lasElement);

//shift

let firstElement = pessoa.shift();
console.log(firstElement);

//unshift

pessoa.unshift("correr", "pedalar");
console.log(pessoa);

//indexOf() se encontrar retorna o indice, se não retorna -1
console.log(pessoa.indexOf(30))
console.log(pessoa.indexOf("bike"))

//lastIndexOf() procura de trás pra frente
console.log(pessoa.lastIndexOf(30))

//join() separa por virgula caso não declare o caractere que deseja usar (ex. ' - ')
console.log(pessoa.join(' - '))
console.log(pessoa.join())
