const CategoryModel = require('../models/CategoryModel');


const CategoryController = {

    getAll: async function(){

        const [__req, res] = arguments;

        const categorias = await CategoryModel.findAll();

        res
        .status(200)
        .json(categorias)
    },
    create: async function(){

        const [req, res] = arguments;

        const { id, nome } = req.body;

        const newCategory = await CategoryModel.create({ id, nome });

        if(newCategory) {
            res
            .status(201)
            .json(newCategory)
        }else {
            res
            .status(401)
            .json({Message: "Categoria não cadastrada!"});
        } 
    },
    getById: async function () {
        const [req, res] = arguments;

        const { id } = req.params;

        const categoryFound = await CategoryModel.findByPk(id);

        if (categoryFound) {
            res
                .status(200)
                .json(categoryFound);
        }
        else {
            res
            .status(404)
            .json({ Message: 'Categoria não encontrada' })
        }
    },
    updateById: async function () {

        const [req, res] = arguments;

        const { id } = req.params;

        const categoryFound = await CategoryModel.findByPk(id);

        if (categoryFound) {

            categoryFound.set(req.body);

            const categoryUpdated = await categoryFound.save();

            res
                .status(200)
                .json(categoryUpdated);
        }
        else {
            res
                .status(404)
                .json({ Message: 'Categoria não encontrada' })
        }
    },

    deleteById: async function (idCategory) {

        const [req, res] = arguments;

        const { id } = req.params;

        const categoryFound = await CategoryModel.findByPk(id);

        if (categoryFound) {
            res
            .status(200)
            .json({Message:`A categoria "${categoryFound.nome}" foi deletada com sucesso!`});
            categoryFound.destroy();
        }
        else {
            res
                .status(404)
                .json({ Message: 'Categoria não encontrada' });
        }
    }

}

module.exports = CategoryController;