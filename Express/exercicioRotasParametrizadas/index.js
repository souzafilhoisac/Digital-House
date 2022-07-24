const express = require('express');
const app = express();

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

// app.get('/serie/:id', (req, res) => {
//     let {id} = req.params;
//     for(i = 0; i < series.length; i++) {
//         if(series[i].id === id) {
//             res.send(series[i].nome);
//         }
//     }
// })


// for(i = 0; i < series.length; i++) {
//     if(series[i].id === id) {
//         console.log(series[i].nome);
//     }
// }