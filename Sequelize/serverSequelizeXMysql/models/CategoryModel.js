const { DataTypes } = require('sequelize');
const DatabaseConfig = require('../database/databaseConfig');

const CategoryModel = DatabaseConfig.define('categorias', {
    // id_categoria: {
    //     type:DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    nome: DataTypes.STRING
});

// CategoryModel.associate = (ModelList) => {
//     CategoryModel.hasMany(ModelList.ProductModel, {
//         foreignKey: 'id_categoria',
//         as: 'produtos'
//     })
// }

module.exports = CategoryModel;