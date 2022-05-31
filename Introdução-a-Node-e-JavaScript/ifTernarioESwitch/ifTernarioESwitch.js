//if ternario
let dia = 'domingo';

/*if(dia === 'domingo'){
    console.log('vou passear')
} else{
    console.log('vou ficar em casa')
}*/

let resultado = dia === 'domingo' ? 'vou passear' : 'vou ficar em casa' ;

console.log(resultado);

//switch

switch(dia){
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log(`Vou trabalhar`);
        break;
    case 'sabado':
        console.log(`Hoje tem balada`);
        break;
    default:
        console.log(`Hoje eu vou ao parque`);
};