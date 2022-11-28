console.log("Exercicio 01 - Troca de Variáveis")

function troca(var_01,var_02){
//Recebe as duas variáveis e faz a troca entre as duas

const aux_01=var_02;
const aux_02=var_01;
return [aux_01,aux_02]
}

const res = troca ("a","b");

console.log("O valor da variável 01 é: " + res[0]); 
console.log("O valor da variável 02 é: " + res[1]);
document.write("O valor da variável 01 é: " + res[0]+'<br>')
document.write("O valor da variável 02 é: " + res[1]);