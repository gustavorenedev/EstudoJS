// boolean
const usuarioLogado = true
const contapaga = false

// truthy ou falsy = não são booleanos mas podem se comportar como se fossem

// 0 => false
// 1 => true

// comparando o 0 com false = dando true
console.log(0 == false);
console.log("" == false);

// comparando o 1 com true = dando true
console.log(1 == true);

// null é um tipo de dado q representa vazio
// undefined
let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

// typeof => verifica qual o tipo da variavel

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);