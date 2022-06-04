let lista = {
    fruta: "laranja",
    carne: "acem",
    bebida: "suco"
};

for(let prop in lista){
    console.log(lista[prop]);
}

let series = ['House of cards', 'Suits', 'Prison Break'];

for(let valor of series){
    console.log(valor)
}

//date
const data = new Date()
console.log(data.getDate())