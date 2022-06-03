const somar = (num1, num2) => num1 + num2;

const calculadora = (num1, num2, operacao) => operacao(num1, num2);

console.log(calculadora(10, 20, somar))
console.log(calculadora(10, 20, (num1, num2) => num1 - num2))

function dobro(num){
    return num * 2;
};

function triplo(num){
    return num * 3;
};

function aplicar(num, operacao){
    return operacao(num);
};

function adicionarHttp(url) {
    return "http://" + url;
};

function processar(array,operacao){
    let newArray = [];
    array.forEach(function(url) {
        newArray.push(operacao(url))
    });
    return newArray;
};

console.log(processar(['google.com','youtube.com'], adicionarHttp))