//estrutura switch case
console.log("Escolha uma fruta:\n");
console.log("1-Banana\n2-Tomate\n3-Morango\n4-Sair");

let opcao, fruta;

opcao = 3;

switch(opcao){
    case 1: fruta = "Banana";
    break;
    case 2: fruta = "Tomate";
    break;
    case 3: fruta = "Morango";
    break;
    default: fruta = "Sair";
    break;
}
console.log(`Você escolheu ${fruta}`);


