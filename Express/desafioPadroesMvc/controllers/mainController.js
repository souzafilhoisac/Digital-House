const Home = {
    paginaInicial: (req, res) => {
        res.send('../views/home.html')
    }
}

module.exports = Home;