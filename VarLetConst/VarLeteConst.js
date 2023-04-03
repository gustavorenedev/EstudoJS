// Var
// a vantagem da var é que quando o javascript é executado ele puxa primeiro a var
// porem de desvantagem é que ele é muito solto e pode dar bugs

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);

// Let = mutavel

// let forma = "retângulo";
// let altura = 5;
// let comprimento = 7;
// let area; 

// if (forma === "retângulo") {
//     area = altura * comprimento;

// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

// const = não mutavel

const forma = "retângulo";
const altura = 5;
const comprimento = 7;
let area;

if (forma === "retângulo") {
        area = altura * comprimento;
    
    } else {
        area = (altura * comprimento) / 2;
    }

console.log(area)