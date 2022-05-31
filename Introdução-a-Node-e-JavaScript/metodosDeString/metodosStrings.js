let frase = "  sou programador js ";

//length
//cumprimento da string

console.log(frase.length)

//indexof
//pesquisa na string o que está nos parametros e retorna a posição

console.log(frase.indexOf('js'))

//slice
//pega um pedaço da string de acordo a posição solicitada

console.log(frase.slice(2,17))
console.log(frase)

//trim
//retira os espaços no inicio e fim da string

console.log(frase.trim())

//split
//transforma a string em array, dividindo de acordo com o parametro passado

console.log(frase.split("o"))

//replace
//substitui caracteres de acordo os parametros passados
//ele só substitui a primeira ocorrência

let newText = frase.replace('js','html')
console.log(newText)