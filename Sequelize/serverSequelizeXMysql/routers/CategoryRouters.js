const Express = require('express');

const CategoryRouters = Express.Router();
const { create, getAll, getById, updateById, deleteById } = require('../controllers/CategoryController');

CategoryRouters.post('/categoria', create);
CategoryRouters.get('/categoria', getAll);
CategoryRouters.get('/categoria/:id', getById);
CategoryRouters.patch('/categoria/:id', updateById);
CategoryRouters.delete('/categoria/:id', deleteById);

module.exports = CategoryRouters;