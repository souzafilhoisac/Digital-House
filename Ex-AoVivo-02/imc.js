

function retornarDiagnosticoDoUsuario(alturaDoUsuario, pesoDoUsuario) {
    let calculoImc = (pesoDoUsuario/(alturaDoUsuario*alturaDoUsuario)).toFixed(1)
    if (calculoImc < 18.5) {
        return `Seu diagnóstico é ABAIXO DO PESO`
    } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
        return `Seu diagnóstico é PESO NORMAL`
    } else if (calculoImc <= 29.9) {
        return `Seu diagnóstico é SOBREPESO`        
    } else if (calculoImc <= 40.0) {
        return `Seu diagnóstico é OBESIDADE`
    } else {
        return `Seu diagnóstico é OBESIDADE GRAVE`
    }        
}


// Utilize a mensagem a seguir como base do retorno esperado:
// Seu diagnóstico é XXXXXX.
console.log(retornarDiagnosticoDoUsuario(1.83,83));