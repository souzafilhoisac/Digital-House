function dividir(X, Y){
    if(X === 0 || Y === 0){
        return "Não se pode dividir por 0"
    } else {
        return X / Y
    }    
}

module.exports = function dividir(X, Y){
    if(X === 0 || Y === 0){
        return "Não se pode dividir por 0"
    } else {
        return X / Y
    }    
};

//console.log(dividir(9,3))