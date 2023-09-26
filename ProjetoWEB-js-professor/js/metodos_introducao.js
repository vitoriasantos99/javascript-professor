//Métodos e Objetos
//Como chamar um objeto ? Colocando "." Ex: pessoa. logo em seguida aparecera as opções que estão dentro dele 
const pessoa = {
    primeiroNome: "José",
    sobreNome: "Antunes",
    codigo: 1578,
    fullName: function(){
        return this.primeiroNome + "" + this.sobreNome;
    }
};
let pnome = pessoa.primeiroNome = "Senac"
let snome = pessoa.sobreNome = "Largo Treze"

console.log(`O seu nome completo é ${pessoa.fullName(pnome,snome)}`)

const calculadora ={
    num1: 10.50,
    num2: 20.50,

}

//Arrow function com parametros
const sub = (num1,num2) => {
    return num1+num2;
}
//Executando com parametros
sub (10,20)

//Arrow function sem parametros, ou seja, não pode inserir informações nos parametros. Ele executará o que tem dentro da função.
const vezes = () =>{
//const = Variavel / vezes = nome da função / () = parametros / => = function

    let resp = num1 * num2;
    return resp;
}
//Executando sem parametros
vezes(1);


//para fazer uma calculadora é obrigatório usar arrow function
