console.log("Exercicio 04 - Verificação Divisibilidade")

function verificacao(var_01){
//Escreva uma função que. dado um número, retorne: 
//Se divisível por 3: Fizz
//Se divisível por 5: Buzz
//Se divisíveo por 3 e 5: FizzBuzz
//Se não for divisível nem por 3 nem por 5, retorna o número dado
//Se não for um número, imprimir: "NaN - Não é um número! Informe um número"

let aux_01;

const ver=isNumber(var_01);

if (ver==true){

    if (((var_01% 3) ==0) &&  ((var_01% 5) ==0)){
        aux_01="FizzBuzz --> Divisivel por 3 e 5";
    } else if (((var_01% 3) ==0) &&  ((var_01% 5) !=0)){
        aux_01="Fizz --> Divisivel somente por 3";
    } else if(((var_01% 3) !=0) &&  ((var_01% 5) ==0)){
        aux_01="Buzz --> Divisivel somente por 5";
    } else {
        aux_01=var_01;
    }
}else{
    aux_01="NaN - Não é um número! Informe um número"
}
return (aux_01);
    
}


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


const nunber=15;

res =verificacao(nunber)


console.log( "Resultado " + nunber +":" + res); 
document.write("Resultado: "+nunber + ":"+ res);





