//Para descrevermos um objeto (também chamado de "classe") é necessário que tenha:
//Nome / Caracteristicas / Ações
//Ex: Persongem (Nome)
//Ex: estilo, sexo, altura, peso, cor, etc (caracteristicas/atributos/variaveis)
//Ex: falar(), andar(), ouvir(), comer(), etc (Ações/funções)

//Só abre e fecha parenteses () quando é uma função 

//criando um objeto
const car = {
    marca: "Ford", //string
    cor: "Amarelo", //string
    ano: 2000, //number
    modelo: "Fiesta", //string
    km: 1500, //number
    combustivel: "Gasolina", //string
    escolheCor: function (cor) { // FUNCTION () - O que fica dentro do parenteses é chamado de paramentro
        return cor;
    }, // <-- DEPOIS DO OBJETO TEM QUE POR A VIRGULA, MENOS NA ULTIMA
    aceleraCar: function (km) {
        return km;
    }
};

let velocidade = car.aceleraCar(90)
console.log ("Acelerando a", velocidade);

let mostraCor = car.escolheCor("Verde")
console.log ("A cor escolhida é", mostraCor);

//acessando os atributos do objeto
car.ano = 2021
console.log(`O ano do carro é: ${car.ano}`);

car.combustivel = "Gasolina"
console.log(`O combustivel a ser usado é: ${car.combustivel}`);

car.cor = "Preto"
console.log(`A cor do carro é: ${car.cor}`);

car.km = 2000
console.log(`A quilometragem é: ${car.km}`);

car.marca = "Ford"
console.log(`A marca do carro é: ${car.marca}`);

car.modelo = "Fiesta"
console.log(`O modelo do carro é: ${car.modelo}`);

//função anonima
const num = function (v1,v2){
    return v1+v2;
}
//função normal
function numNovo (v1,v2){
    return v1+v2;
}



