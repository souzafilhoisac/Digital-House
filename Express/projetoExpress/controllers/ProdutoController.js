const controlador = {
    index: (req, res) => {
        res.send('Index de produtos');
    }
};

module.exports = controlador;

const ProdutoController = {
    criarProduto: (req, res)=>{
        res.send('Criando um produto');
    },
    deletarProduto: (req, res) => {
        const {id} = req.params;

        res.send('Deletando o produto com id: '+ id);
    }
}

module.exports = ProdutoController;