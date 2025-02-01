// Definindo outra função regular com dois parâmetros
    function soma(a, b) {
        return a + b;
    }

// Chamando a função soma e armazenando o resultado em uma variável
    let resultado = soma(13, 29);

//Exibindo o resultado da função soma
    console.log("O resultado da soma é: " + resultado);

// Definindo uma função regular usando a palava-chave function
    function saudacao(nome) {
        console.log("Olá, " + nome + "!");
    }

// Chamando a função saudacao e passando um argumento
    saudacao("Raphael Martins Pimenta");

// Definindo uma função regular sem parâmetros e sem retorno
    function mensagem() {
        console.log("Esta é uma mensagem de boas vindas!")
    }

// Chamando a função mensagem
saudacao("Raphael");
mensagem();

// =====================================================================================================

// Declaração de uma variável chamada resultado e atribuição de um função anônima a ela
    let somarParametros = function (parametro1, parametro2) {
        console.log("Parâmetro 1: " + parametro1);
        console.log("Parâmetro 2: " + parametro2);

        let resultado2 = parametro1 + parametro2; // calcula os parâmetros

        console.log("Resultado: " + resultado2); // resultado da soma dos parâmetros

        return resultado2; // retirba o resultado.
    }

// Chamada da função anônima através da variável
    let resultado2 = somarParametros(5, 10); // criando uma let, chamando o somarParametros e passando os parâmetros para que tenha a soma.
    console.log("Resultado da chamada da função somarParametros: " + resultado2);

// Definindo uma função que aceita outra função como argumento
    function executarFuncao(funcao, valor1, valor2) {
        console.log("\nExecutando a função passada como argumento ou parâmetro");
        return funcao(valor1, valor2);
    }

// Passando a função anônima como argumento para outra função
    let resultadoExecucao = executarFuncao(somarParametros, 7, 3)
    console.log("Resultado da execução da função passada como argumento: " + resultadoExecucao);

// Definindo e chamando uma função anônima imediatamente
let resultadoImediato = (function(a,b){
    console.log("\nFunção de chamada imediata: ");
    return a*b;
})(4,6);
console.log("Resultado da função anônima imediatamente: " + resultadoImediato);