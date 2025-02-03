
// Função que simula a operação de uma calculadora 
    function calculadora(num1, num2) {
        

    

// Operações aritméticas bássicas
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;


// Incremento e Decremento
// Vamos incrementar o num1
let incrementar = num1;
incrementar++
    

// Vamos decrementar o num2
let decrementar = num2;
decrementar--;

// Exibindo os resultados no console

console.log(`Subtração (${num1} - ${num2}) = ${subtracao}`);
console.log(`Divisão (${num1} * ${num2}) = ${multiplicacao}`);
console.log(`Multiplicação (${num1} / ${num2}) = ${divisao}`);
console.log(`Modulo (${num1} % ${num2}) = ${modulo}`);
console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial}`);
console.log(`Incrementar (${num1} ++ ${num2}) = ${incrementar}`);
console.log(`Decrementar(${num1} -- ${num2}) = ${decrementar}`);

    }
// Executando a função calculadora
calculadora(15, 5);
// Nan = Not a Number. => Não é número.
