const express = require('express');

let app = express();

app.get('/', (req, res) => res.send("Olá Mundo!"));

//criando um servidor

app.listen(3030, () => console.log("Servidor rodando na porta 3030"));