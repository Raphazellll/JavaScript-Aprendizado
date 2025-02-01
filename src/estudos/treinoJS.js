
// Exercício de funções anônimas

let somarParametros2 = function (a, b , c) {
    
    let resultado3 = (a + b * c);

    return resultado3;
}

let resultado3 = somarParametros2(15, 17, 3);
console.log("Resultado do cálculo é: " + resultado3);

// ============================================

// Exercício de funções regulares

const nome = "Raphael Martins Pimenta";
let idade = 29;
const cidade = "Foz do Iguaçu";
const estado = "Paraná";


let texto = ("Olá, me chamo " + nome + ", tenho " + idade + " anos de idade. Atualmente estou morando em " + cidade + ", " + estado + ".");
console.log(texto);