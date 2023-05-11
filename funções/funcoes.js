// let x = "";
// console.log(x);
// x = "oi";

// // DECLARAÇÃO DE FUNÇÃO
// // 1) declara a função
//                     // string
// function imprimeTexto(texto){
//     console.log(texto)
// }

// // 2) executa a função (1 ou + vezes)

// imprimeTexto("oi");

// três formas de escrever funções
function soma(){
    const resultado = 2 + 2;
    return resultado
}

// console.log(soma())

// parametros de função
function soma(num1, num2){
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

// console log = soma e depois multiplica os numeros que somou
console.log(multiplica(soma(4, 5), soma(3, 3))) 

