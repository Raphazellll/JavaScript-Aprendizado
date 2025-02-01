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

        let resultado2 = parametro1 + parametro2;

        console.log("Resultado: " + resultado2);

        return resultado2;
    }

// Chamada da função anônima através da variável
    let resultado2 = somarParametros(5, 10);
    console.log("Resultado da chamada da função somarParametros: " + resultado2);

// Definindo uma função que aceita outra função como argumento
    function executarFuncao(funcao, valor1, valor2) {
        console.log("");
    }

// Passando a função anônima como argumento para outra função
    console.log("Resultado da execução da função passada como argumento: " + resultadoExecucao);

// Definindo e chamando uma função anônima imediatamente