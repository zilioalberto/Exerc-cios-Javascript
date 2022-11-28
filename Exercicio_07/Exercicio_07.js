console.log("Exercicio 07 - Imprimir String")

//Escreva uma função que verifique e imprima somente as propriedades de tipo "string" de um objeto.

function prin_vet_string(vetor){

   console.log( "Tamanho do Vetor "+ vetor.length); 

  for(i = 0; i <= vetor.length; i++)

 if ((typeof (vetor[i])) == "string") {
    console.log( "String "+ i +":" + vetor[i]); 
    document.write( "String "+ i +":" + vetor[i]+"<br>"); 
 }

     
 }
 
 
 res =prin_vet_string([1, ,'c',2,"a",5,null,"b"])
 
 
