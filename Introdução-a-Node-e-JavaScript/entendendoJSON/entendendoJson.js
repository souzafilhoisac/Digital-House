let dados = [
    {
        nome:'FULANO',
        sobrenome:'DA SILVA',
        idade:'26',
    },
    {
        nome:'CICLANO',
        sobrenome:'DE SOUZA',
        idade:'33',
    }
]

let dadosJson = JSON.stringify(dados)
console.log(dadosJson)

let dadosJSDeNovo = JSON.parse(dadosJson)
console.log(dadosJSDeNovo)