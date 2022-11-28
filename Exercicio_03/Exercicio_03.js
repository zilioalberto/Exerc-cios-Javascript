console.log("Exercicio 03 - Largura ")

function verificacao(largura,altura){
//Escreva uma função que verifique, dados uma largura e altura, 
//e retorne "true" se (paisagem - landscape) se a largura for maior que a altura e falso (retrato) caso contrário.
let res;
let res_txt;

if (largura>altura ){
    res=true;
    res_txt="Paisagem"
}else{
    res=false;
    res_txt="Retrato"
}

return [res,res_txt]

}

const res = verificacao (1200,720);

console.log("O resultado é : " + res[0]); 
console.log("A resolução é " + res[1]);
document.write("O resultado é : " + res[0]+'<br>')
document.write("A resolução é : " + res[1]);