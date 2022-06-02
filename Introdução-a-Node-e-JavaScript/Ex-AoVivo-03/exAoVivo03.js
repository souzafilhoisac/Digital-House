// Essa é a lista de filmes disponibilizada pelo professor inicialmente.
let listaDeFilmes = ["Clube dos Cinco", "A Hora do Pesadelo", "Karatê Kid", "Rocky IV", "Conan, o Bárbaro", "Highlander"];

// 1.1. Apresenta todos os filmes da lista separados por ponto e vírgula.
function apresentaTodosOsFilmesSeparadosPorPontoVirgula() {
    console.log(listaDeFilmes.join('; '))
}

apresentaTodosOsFilmesSeparadosPorPontoVirgula()

// 1.1. Apresentar quantidade de filmes da lista.
function quantidadeTotalDeFilmes() {
    console.log(`A quantidade de filmes é ${listaDeFilmes.length}.`)
}

quantidadeTotalDeFilmes()

// 1.3. Buscar o nome do filme de acordo com seu índice.
function buscarNomeDoFilmePeloIndice(indiceDoFilme) {
    console.log(listaDeFilmes[indiceDoFilme])
}

buscarNomeDoFilmePeloIndice(3)

// 1.4. Adiciona um novo filme a lista pelo seu nome.
function adicionaUmNovoFilmePeloSeuNome(nomeDoFilme) {
    listaDeFilmes.push(nomeDoFilme)
    console.log(listaDeFilmes)
}

adicionaUmNovoFilmePeloSeuNome('Homem aranha')

// 1.5. Atualiza um filme a partir do seu índice na lista.
function atualizarUmFilmePeloSeuIndice(indiceDoFilme) {
    
}

// 1.6. Listar todos os filmes com seu índice/posição na lista.
function listarTodosOsFilmesComSeuIndiceNaLista() {

}

// 1.7. Listar filmes por quantidade.
function listarFilmesPorQuantidade(quantidadeDeFilmesDesejada) {

}
