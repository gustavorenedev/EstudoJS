// tipo de dado
//booleanos

// conversão implícita

const numero = 456;
const numeroString = "456";

// "===" faz uma comparação restrita
// "==" faz a conversão de string para numero automaticamente e compara o valor de ambos
console.log(numero === numeroString);

// na soma ele pega ambos valores e faz um concatenação
console.log(numero + numeroString);

// conversão explícita

// Number() = usamos quando queremos transformar uma string em numero
// String() = usamos quando queremos transformar um numero em string

console.log(numero + Number(numeroString));