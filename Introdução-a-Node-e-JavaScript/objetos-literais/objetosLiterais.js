//objeto literal

let pais = {
    nome: 'Brasil',
    capital: 'Brasília',
    nacionalidade: function(){
        return `Nasci no ${this.nome}`
    }
};

console.log(pais['nome'])
console.log(pais.capital)
console.log(pais.nacionalidade())

//função construtora

let listaDeCarros = {
    marca:'Chevrolet',
    modelo:'Celta',
};


function ListaDeCarros(novaMarca, novoModelo){
    this.marca = novaMarca;
    this.modelo = novoModelo;
}

console.log(listaDeCarros);
console.log(new ListaDeCarros('Renault', 'Duster'));

//arrow function

const somar = (num1, num2) => {
    let soma = num1 + num2;
    return `A soma entre ${num1} e ${num2} é ${soma}.`
}


console.log(somar(3,6))