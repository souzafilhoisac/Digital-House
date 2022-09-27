const Express = require('express');
const Home = require('../controllers/mainController');

const router = Express.Router();

router.get('/', Home.paginaInicial);

module.exports = router;