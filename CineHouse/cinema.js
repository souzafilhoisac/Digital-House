let cinema = "CineHouse"

//console.log(cinema)
//Array com objetos
let catalogo = [
    {
        codigo: 221,
        titulo: 'Sherlock Holmes',
        duracao: 2,
        atores: ["Robert Downey Jr", "Jude Law", "Rachel McAdms"],
        anoLancamento: 2009,
        emCartaz: false
    },
    {
        codigo: 42,
        titulo: 'Doutor Estranho no Multiverso da Loucura',
        duracao: 2,
        atores: ["Elizabeth Olsen", "Xochitl Gomez", "Benedict Cumberbatch"],
        anoLancamento: 2022,
        emCartaz: true
    }
]

//catalogo.push({'codigo':null, 'titulo':null, 'duracao':null, 'atores':[null], 'anoLancamento':null, 'emCartaz':null})
//console.log(catalogo)
//Função para adicionar novos filmes com duas validações, a primeira verificando se o código 
//e o titulo já estão no array, a segunda verificando se todos os campos estão devidamente preenchidos

function adicionarFilmes(codigo, titulo, duracao, atores = [], anoLancamento, emCartaz){
    for(let i = 0; i < catalogo.length; i++){
        if(codigo === catalogo[i].codigo || titulo === catalogo[i].titulo) {
            return "Código ou filme já cadastrado"            
        } else if(emCartaz === undefined || emCartaz === null){
            return "Por favor, preencha todos os campos."
        }
    }
    catalogo.push({codigo, titulo, duracao, atores, anoLancamento, emCartaz})
    console.log("Filme cadastrado com sucesso!")
    return catalogo
}

//console.log(adicionarFilmes(25, "Homem Aranha", 2, ["Tobey Maguire", "Kirsten Dunst", "Willem Dafoe"], 2002, false))

//Função que busca o filme pelo código retornando o título do mesmo.

function buscarFilme(cod){
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === cod){
            return catalogo[i].titulo
        }
    }
    return "[ERRO] Filme não cadastrado"
}

//console.log(buscarFilme(42))

//Função que altera o status (em cartaz) de acordo o código do filme buscado.

function alterarStatusEmCartaz(cod){
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === cod){
            return !catalogo[i].emCartaz
        }
    }
}

//console.log(alterarStatusEmCartaz(221))