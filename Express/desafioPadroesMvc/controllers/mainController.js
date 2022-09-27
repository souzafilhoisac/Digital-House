const path = require('path')

const Home = {
    paginaInicial: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    }
}

module.exports = Home;