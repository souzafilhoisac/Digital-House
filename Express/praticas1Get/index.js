/*
Temos uma lista de celulares, cada um com seu preço.
Vamos criar a rota "/celulares" do tipo GET para listar todos.
Para mostrar a lista devemos usar o método send do parâmetro response.
Bem, agora também gostaríamos de poder filtrar a lista de celulares em função do preço. O usuário deveria acessar uma url que tenha uma query string com o parâmetro "max". A partir desse parâmetro nós temos que devolver a lista de celulares contudo mostrando apenas aqueles cujo preço não supere o do parâmetro "max".

Por exemplo, se o usuário acessar a url /celulares?max=20000 deveríamos listar todos os modelos menos o "Samsung Galaxy A50"
 */


const express = require('express');
const router = express.Router();

const celulares = [
    {
        nome: 'Motorola Moto E6 Plus',
        preco: 14999
    },
    {
        nome: 'Motorola Moto G7',
        preco: 19999
    },
    {
        nome: 'Alcatel 5033A',
        preco: 6999
    },
    {
        nome: 'Samsung Galaxy A50',
        preco: 33499
    }
];

function celularFiltrado(value){
    let params = max;
    if(value.preco <= params) {
        return value;
    }
}



router.get("/celulares", (req, res) => {
    res.send(celulares)
});

router.get('/celulares/:max', (req, res) => {
    let filtrados = celulares.filter(celularFiltrado);
    res.send(filtrados);
});