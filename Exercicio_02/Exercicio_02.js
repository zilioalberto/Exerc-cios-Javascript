console.log("Exercicio 02 - Maior Valor entre dois")

function maior(var_01,var_02){
//Recebe as duas variáveis e verifica qual é o maior

let aux_01,aux_02;

if (var_01>var_02){
    aux_01=var_01;
    aux_02=var_02; 
}else{
    aux_01=var_02;
    aux_02=var_01;
}

return [aux_01,aux_02];
}

const res = maior (15,20);

console.log("O maior valor é: " + res[0]); 
console.log("O menor valor é: " + res[1]);
document.write("O maior valor é: " + res[0]+'<br>')
document.write("O menor valor é: " + res[1]);