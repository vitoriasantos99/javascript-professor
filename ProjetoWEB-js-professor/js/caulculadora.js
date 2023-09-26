console.log("CALCULADORA\n");
console.log("Escolha um número:\n");
console.log("Escolha outro número:\n");
console.log("1-Adição\n2-Subtração\n3-Multiplicação\n4-Divisão");

const calculadora ={
    num1: 10.00,
    num2: 20.00,

    soma: (num1,num2) => {
        this.num1 = num1;
        this.num2 = num2;

        return(this.num1+this.num2);
    },

    sub: (num1,num2) => {
        this.num1 = num1;
        this.num2 = num2;

        return(this.num1-this.num2);
    },

    Multi: (num1,num2) => {
        this.num1 = num1;
        this.num2 = num2;

        return(this.num1*this.num2);
    },

    div: (num1,num2) => {
        this.num1 = num1;
        this.num2 = num2;

        return(this.num1/this.num2);
    },
};

let opcao, operacao, num1, num2, resultado; 

opcao = 4

num1 = 0
num2 = 0

switch(opcao){
    case 1: operacao = "Adição"
        resultado = calculadora.soma(num1,num2)
    break;
    case 2: operacao = "Subtração"
        resultado = calculadora.sub(num1,num2)
    break;
    case 3: operacao = "Multiplicação"
        resultado = calculadora.Multi(num1,num2)
    break;
    case 4: operacao = "Divisão"
        resultado = calculadora.div(num1,num2)
    break;
}

let cal = calculadora.soma
console.log(`O resultado da ${operacao} é ${resultado}`);

function calcula(){
    let num = document.getElementById("number").value;

    alert(num1 + num2);
}


/*let opcao, operacao, num1, num2, resultado; 

num1 = 10;
num2 = 20;

const somaNumero = (num1,num2) => {
    return(num1+num2);
}
const subtracao = (num1,num2) => {
    return(num1-num2);
}
const multiplicacao = (num1,num2) => {
    return(num1*num2);
}
const divisao = (num1,num2) => {
    return(num1/num2);
}

opcao = 2;

switch(opcao){
    case 1: operacao = "Adição"
        resultado = somaNumero(num1,num2)
    break;
    case 2: operacao = "Subtração"
        resultado = subtracao(num1,num2)
    break;
    case 3: operacao = "Multiplicação"
        resultado = multiplicacao(num1,num2)
    break;
    case 4: operacao = "Divisão"
        resultado = divisao(num1,num2)
    break;
}

console.log(`O resultado da ${opcao} é ${resultado}`);*/