console.log("CALCULADORA\n");
console.log("Escolha um número:\n");
console.log("Escolha outro número:\n");
console.log("1-Adição\n2-Subtração\n3-Multiplicação\n4-Divisão");

let opcao, operacao, num1, num2, resultado; 

num1 = 10;
num2 = 20;

function somaNumero(num1,num2){
    return(num1+num2);
}
function subtracao(num1,num2){
    return(num1-num2);
}
function multiplicacao(num1,num2){
    return(num1*num2);
}
function divisao(num1,num2){
    return(num1/num2);
}

//alt+shift

opcao = 3;

switch(opcao){
    case 1: operacao = "Adição"
        resultado = somaNumero(num1, num2)
    break;
    case 2: operacao = "Subtração"
        resultado = subtracao(num1, num2)
    break;
    case 3: operacao = "Multiplicação"
        resultado = multiplicacao(num1, num2)
    break;
    case 4: operacao = "Divisão"
        resultado = divisao(num1, num2)
    break;
}
console.log(`Os numeros digitados ${num1} ${num2}\n operação escolhida ${operacao}\n O resultado é: ${resultado}`);


