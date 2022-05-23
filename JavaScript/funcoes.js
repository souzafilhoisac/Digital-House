function darOi() {
    console.log("Oĺá tudo bem?")
}

darOi()

//função expressa

let somar = function(numA, numB){
    return numA + numB
}

//somar(11,22)

//let resultado = somar(11,22)
//console.log(resultado)

let resultado = 0
console.log('resultado fora da função = ', resultado)
function multiplicar(numA, numB){
    let resultado = numA + numB
    console.log(resultado)

    console.log('resultado dentro da função = ', resultado)
}

multiplicar(2,2)