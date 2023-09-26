//função (normal) - o "somaValor" é o nome da função, ou seja, ele vai somar
//Ex: function somaValor(num1, num2){
//      return (num1 + num2);
//     }
//somaValor(20,30);


//função anonima = não tem nome - Para função anonima o ideal é utilizar "const"
//Ex: const resp = function (num1, num2){
//      return (num1 + num2);
//    }
// let valor = resp(10,50); 


//funções avançadas
function escreverNomes(nome){
    return nome;
}

//Executando a função
let nNome = escreverNomes("Senac");
let sobreNome = escreverNomes("Largo Treze")
console.log(`Olá ${nNome} seu sobrenome é ${sobreNome}`)

//função como uma expressão
const area = function (base,altura){ 
    return base * altura
}

let x = area(10,20);
console.log("A área é ", x)


const pi = 3.14161828141926;

console.log("O pi vezes a área é ", area (40,50*pi))


//Arrow function (=>) ou função de seta = Simplicação da função. Ex abaixo é a BASE  
const v = () => {
    console.log('Olá mundo!!!')
}
v();

//Variavel: Var (pouco usada aqui), let, const = pesquisar a diferença delas 

//construindo arrow function com parâmetros
const raiz = (q) =>{
    return q*q;
}
//executando arrow function
let r = raiz(4);

console.log(`Raiz quadrada do número 4 é ${r}`);

//funções predefinidas
let seno = Math.sin(30);
let quad = Math.sqrt(4)
let aleatorio = Math.random();
console.log("O seno de 30 é ", seno);
console.log("O quadrado de 4 é ", quad);
console.log("Aleatorio ", aleatorio)


//tudo o que iniciar em letra maiuscula é uma classe
//todo objeto é uma classe (classe e objeto é a mesma coisa)
//para chamar a classe, após o nome é só colocar "."
