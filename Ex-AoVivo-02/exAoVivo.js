// Cotação do dólar no dia 3 de maio de 2022
// Utilize as mensagens a seguir como base do retorno esperado:
// A compra mínima permitida é de $ XXX,XX.
// A compra máxima permitida é de $ XXXX,XX.
// Você pode comprar $ XXX,XX.

let cotacaoDoDolarHoje = 4.97;
let valorMinimoDeCompraDeDolar = 100;
let valorMaximoDeCompraDeDolar = 2500;
let tenhoQuantoDinheiro = 1200;
let valorMinimoConvertido = valorMinimoDeCompraDeDolar/cotacaoDoDolarHoje;
let valorMaximoConvertido = valorMaximoDeCompraDeDolar/cotacaoDoDolarHoje;
let meuValorConvertido = tenhoQuantoDinheiro/cotacaoDoDolarHoje;

/*function converterRealParaDolar() {
    if(cotacaoDoDolarHoje <= 5) {
        console.log(`A compra mínima permitida é de $${valorMinimoConvertido.toFixed(2)}`)
        console.log(`A compra máxima permitida é de $${valorMaximoConvertido.toFixed(2)}`)
        console.log(`Você pode comprar $${meuValorConvertido.toFixed(2)}`)
    } else {
        console.log('O valor está muito alto, prefiro não comprar')
    }
}*/

function converterRealParaDolar(meuValor) {
    let result = meuValor/cotacaoDoDolarHoje
    if (result < valorMinimoConvertido) {
        return `A compra mínima permitida é de ${valorMinimoDeCompraDeDolar.toFixed(2)} Reais ou ${valorMinimoConvertido.toFixed(2)} Dolares.`
    } else if (result > valorMaximoConvertido) {
        return `A compra máxima permitida é de ${valorMaximoDeCompraDeDolar.toFixed(2)} Reais ou ${valorMaximoConvertido.toFixed(2)} Dolares.`
    } else {
        return `Você pode comprar ${result.toFixed(2)} Dolares`
    }
}

console.log(converterRealParaDolar(1500))