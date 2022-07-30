const express = require('express');
const rotasProdutos = require('./rotas/rotasProdutos');
let app = express();

app.get('/', (req, res) => res.send("Olá mundo!"));
app.get('/contatos', (req, res) => res.send("Página de contatos"));

app.use('/produtos', rotasProdutos);

app.get('/usuario', (req, res) => res.send("Teste para o usuario..."));
app.post('/usuario', (req, res) => res.send('Teste para cadastro de usuário...'));
app.put('/usuario/:id', (req, res) => res.send('Teste para edição de um usuário...'));
app.delete('/usuario/:id', (req, res) => res.send('Teste para deletar um usuário...'));

app.use('/produtos', rotasProdutos);
//criando um servidor
app.listen(3030, () => console.log("Servidor rodando na porta 3030"));