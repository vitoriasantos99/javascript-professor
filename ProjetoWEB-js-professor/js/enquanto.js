//estrutura de repetição while
let contador=11;

while(contador < 10){

    contador = contador + 1;
    //contador++;
    console.log(`O contador vale ${contador} vocês viram`);
    console.log("O contador vale ", contador," vocês viram");
}
//estrutura de repetição do while
let cont = 0;
do{

    cont = cont + 1;    
    console.log("Executando do while...");

}while(cont <= 10);

//estrutura de repetição for
let i;
for(i=0;i<10;i++){
    //repete
    console.log(`Imprimindo o valor de i ${i}`);
}
//for dentro do for
for(let linha=0; linha<5 ; linha++){
    for(let coluna=0; coluna<2 ; coluna++){

        console.log(`Linha ${linha} | coluna ${coluna}`);

    }
}
