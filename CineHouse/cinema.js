let cinema = "CineHouse"

//console.log(cinema)

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

//console.log(catalogo.codigo)

/*function adicionarFilmes(codigo, filme, duracao, atores, anoLancamento, emCartaz){
    catalogo.push()
}*/

function buscarFilme(cod){
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === cod){
            return catalogo[i].titulo
        }
    }
    return "[ERRO] Filme não cadastrado"
}

console.log(buscarFilme(33))

/*function alterarStatusEmCartaz(true){

}

buscarFilme(42)*/