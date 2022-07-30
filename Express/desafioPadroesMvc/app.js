const express = require('express');
const main = require('./routers/main')
const app = express();

app.use('/', main)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000...')
});

