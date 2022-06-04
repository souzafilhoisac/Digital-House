let listaDeNumeros = [1, 2, 3, 4, 5, 6]

//map
let listaDeNumerosDobro = listaDeNumeros.map(function(valor, index){
    return valor * 2;
})

console.log(listaDeNumerosDobro)

//filter
let listaDeNumerosFiltrados = listaDeNumeros.filter(function(valor, index){
    return valor > 3;
})

console.log(listaDeNumerosFiltrados)

//reduce
let listaDeNumerosSomados = listaDeNumeros.reduce(function(res, num){
    return res + num;
})

console.log(listaDeNumerosSomados)

//forEach
listaDeNumeros.forEach(function(valor, index){
    console.log(`O valor é ${valor} e a sua posição é ${index}.`)
});