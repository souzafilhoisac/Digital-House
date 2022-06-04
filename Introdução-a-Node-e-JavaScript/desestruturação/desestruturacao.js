let pessoa = {
    nome: "Fulano",
    apelido:'ninho',
    altura: 1.80
};

const {nome, altura} = pessoa;
//console.log(nome, altura);

let listaCompras = ['Pão','Leite','Ovo','Café'];
let [item1, item2, item3] = listaCompras;
//console.log(item1,item2,item3);

//outros métodos com array
//spread

let infoPessoal = {
    telefone: 9879887987,
    endereco:'rua aquela la'
}

let complementares = {
    agencia: 132132,
    conta: 321231
}

let pessoa2 = {
    nome: "Ciclano",
    apelido:'nera',
    altura: 1.75,
    ...infoPessoal,
    ...complementares
};

let situacao = {
    ativo: true,
    ...pessoa2
}

//console.log(situacao)

let frutas = ['banana', 'laranja', 'melão']
let frutas2 = ['abacaxi', 'cereja', 'ameixa']
let listaCompleta = [...frutas, ...frutas2]

//console.log(listaCompleta)

//Spread operator utilizado para quando não há um número definido de parâmetros a serem utilizados
function letras(...paramts){
    console.log(paramts)
}

letras('a','b','c')