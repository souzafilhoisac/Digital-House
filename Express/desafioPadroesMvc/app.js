const Express = require('express');
const main = require('./routers/mainRouter')
const app = new Express();

app.use('/', main)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000...')
});

