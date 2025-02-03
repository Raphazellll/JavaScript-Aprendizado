// Exemplos de operatives Lógicos em JavaScript

// Operador E Lógico (&&)

const a = true;
const b = false;

const resultadoE1 = a && b; // FALSO
const resultadoE2 = a && true; // VERDADEIRO


console.log(`true && false: ${resultadoE1}`); // Saída: false
console.log(`true && true: ${resultadoE2}`); // Saída: true

// Operador OU lógico (||)
const resultadoOU1 = a || b;
const resultadoOU2 = a || false;

console.log(`true && false: ${resultadoOU1}`); // Saída: false
console.log(`true && true: ${resultadoOU2}`); // Saída: true

// Operadão NÃO lógico (!)
const resultadoNao1 = !a;
const resultadoNao2 = !b;

console.log(`true && false: ${resultadoNao1}`); // Saída: false
console.log(`true && true: ${resultadoNao2}`); // Saída: true

// Combinações de Operadores Lógicos

const resultadoCombo1 = (a || b) && !b;
const resultadoCombo2 = (a && b) && a;

console.log(`(True || false) && !false:  ${resultadoCombo1}`); // Saída: true
console.log(`(True && false) || !true:  ${resultadoCombo1}`); // Saída: false

