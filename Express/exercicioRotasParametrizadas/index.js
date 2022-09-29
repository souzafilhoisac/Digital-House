//const express = require('express');
//const app = express();

//Queremos que você crie uma rota que aponte para "/serie" e que ela, por sua vez, receba um número. 
//Esse número vai representar a identificação da série que tentamos visualizar. 
//Portanto, a rota deve retornar apenas a série que corresponde ao id que veio pelo parâmetro.
//Um exemplo de como seria a rota: http://localhost/serie/3


const series = [
    {
        id: 1, 
        nome: 'Irmão do Jorel'
    },
    {
        id: 2, 
        nome: 'Um maluco no pedaço'
    }
]

let id = 1;
let serieFound = series.find((serie) => {
    return serie.id === id;
});
    console.log(serieFound);

/*app.get('/serie/:id', (req, res) => {
    let id = Number(req.params.id);
    let serieFound = series.find((serie) => {
        return serie.id === id;
    });
        res.send(serieFound);
    }
)*/