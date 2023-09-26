//estrutura de decisão
let a = 30;
let b = 20;

if(a>b){
    console.log("É verdadeiro.");
}

if(b>a){
    console.log("É verdadeiro.");
}

//Utilizando o else para responder a parte false
if(a>b){
    console.log("A é maior que B");
}
else{
    console.log("A não é maior que B");
}

//Utilizando a estrutura de decisão elseif
let saudacao, periodo;

console.log(`Digite: \n1- Bom dia \n2- Boa tarde \n3- Boa noite`);

periodo = 2;

if(periodo === 1){
    saudacao = "Bom dia";
}else if(periodo === 2){
    saudacao = "Boa tarde";
}else if(periodo === 3){
    saudacao = "Boa noite";
}else{
    saudacao = "Nenhum período selecionado";
}
console.log(`Você selecionou ${saudacao}`);



