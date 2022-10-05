require('dotenv')
    .config();

const { Sequelize } = require('sequelize');

const DatabaseConfig = new Sequelize(process.env.SERVER_NAME, process.env.SERVER_USER, process.env.SERVER_PASSWORD, {
    host: process.env.SERVER_HOST,
    dialect: process.env.SERVER_DIALECT
});

try {
    DatabaseConfig.authenticate();
    DatabaseConfig.sync();
    console.log('Comunicação estabelecida.');
}
catch (error) {
    console.error('Não foi possível se comunicar com banco de dados:', error);
}

module.exports = DatabaseConfig;