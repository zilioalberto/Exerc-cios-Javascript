console.log("Exercicio 06 - Contagem Truthy")

function cont_vet(vetor){
//Escreva uma função que conte os números de valores "truthy" em um array. 
//Valores "Falsy" em javascript:
 //   false
 //   0 (zero)
 //   undefined
 //   null
 //   '' (string vazia)
 //   NaN
 
 let cont = 0; //Variável para contagem dos Truthy

 for(var i = 0; i <= vetor.length; i++)

 if (vetor[i]) {
    cont++
 }
 return (cont);
     
 }
 
 
 res =cont_vet([1, ,'',2,"a",5,null,10])
 
 
 console.log( "Quantidade de numeros Truthy "+":" + res); 
 document.write("Quantidade de numeros Truthy "+":" + res); 