
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

// ============================================
 // Arrow Function
// Esse tipo de função serve melhor para listar, podendo criar varias variáveis para diferentes saídas
// Não dando para usar com Strings, apenas com int ou doubles
 let numero = [5.0];
 
 let multiplicacao = numero.map(n => n*1);
 let multiplicacao2 = numero.map(n => n*2);
 let multiplicacao3 = numero.map( n => n*3);
 let multiplicacao4 = numero.map(n => n*4);
 let multiplicacao5 = numero.map(n => n*5);

 console.log(multiplicacao)
 console.log(multiplicacao2)
 console.log(multiplicacao3)
 console.log(multiplicacao4)
 console.log(multiplicacao5)

 // ============================================

 // Operadores 

 let a = 7 
 let b = 10
 let c = 5

 let result = (a >= b) || (c <= b) // true

 console.log(result)

  // ============================================

  // Estrutura condicional

  