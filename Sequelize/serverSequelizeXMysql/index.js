require('dotenv')
    .config();

require('./database/databaseConfig');
const Express = require('express');
const CategoryRouters = require('./routers/CategoryRouters.js')


const app = new Express();

app.use(Express.json());
app.use(('/', CategoryRouters));

app.listen(process.env.SERVER_PORT, console.log(`Servidor rodando`))