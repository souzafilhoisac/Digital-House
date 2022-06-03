const fs = require("fs")
let moment = require("moment")

const superHeros = require('./superHeros')

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8')
let data = moment().format('MMM do YY')

console.log(superHeros)

let mensagem;

console.log('MENSAGEM', mensagem)