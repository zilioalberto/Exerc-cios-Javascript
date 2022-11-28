console.log("Exercicio 05 - Par Impar")

function print_par_impar(var_01){
//Escreva uma função que, dado um número limite, 
//imprima, até esse limite "par" ou "ímpar" 
//(verificando os números entre 0 e limite).

for(var i = 0; i <= var_01; i++)

if ((i% 2) ==0){
    console.log( i +":" + "Par"); 
    document.write( i +":" + "Par <br>"); 
}else{
    console.log( i +":" + "Impar"); 
    document.write( i +":" + "Impar <br>");   
}

}


res =print_par_impar(5)







