/* 
    JavaScript

    Base essencial para entender e escrever o código:
        * Variáveis e tipos de dados
            Palavas-chave var, let ou const

        * Operadores
            Operadores aritimétidos, atribuição, comparação, lógicos

        * Estruturas de Controle
            Laços de repetição

        * Funções
            Blocos de código reutilizáveis

        * Objetos
            Entidades do mundo real e propriedades
    


    Constantes e Variáveis

        Existem três tipos de forma de declaração de variáveis.
            var:
                O escopo varia sendo de função ou global.
            let:
                O escopo é de bloco.
            const:
                Valor fixo. (constante)
        
========================================================================================================================================================

    Funções Anônimas
    
    let exemploDeFuncao = function(parametro1, parametro2) {
        //bloco de código a ser executado
        }


        Funções anônimas em JavaScript são funções que não possuem nome. 
            Elas são usadas para simplificar a criação de funções menores e para executar o código no local em que foi escrito. 
        
        As funções anônimas são úteis em situações em que funções recebem outras funções como argumento.
             Por exemplo, em padrões de execução imediata e em argumentos de funções de temporização. 
        
        
         Para criar uma função anônima em JavaScript, basta omitir o nome da função na declaração. 
        Para executar uma função anônima, é possível: 
            Executá-la imediatamente após a sua declaração
            Atribuir a expressão a uma variável
            Passá-la como argumento para outra função

            Código

            function (a, b, c){ 
            return a + b + c; 
            } /// Esta função retorna a soma de três números. 


========================================================================================================================================================

    Função arrow

        A função arrow, ou função de seta, é uma forma de escrever funções no JavaScript que é mais concisa que a expressão de função (function expression). 
            A sintaxe da função arrow é: variável = (parâmetros) => {  … 
            A função arrow é útil para escrever funções pequenas e concisas, tornando o código mais limpo e fácil de ler. 

            Algumas vantagens da função arrow são:
            Serem menos verbosas do que as funções tradicionais 
            O valor do "this" é definido a partir das funções onde foram definidas 
            São úteis para passar funções como parâmetros para outras funções ou para métodos de objetos 
            No entanto, as funções arrow são anônimas, o que significa que não são nomeadas. Isso pode dificultar a depuração. 


========================================================================================================================================================

   

        Definição de Operadores em programação

            Símbolos ou palavras-chaves especiais que permitem realizar operações em valores, variáveis ou expressões.
                * Operaçõe aritméticas
                * Comparações
                * Atribuições e outras
                 
        Operadores aritméticos
            Operações matemática em valores numéricos.

            * Adição(+)
            * Subtração(-)
            * Multiplicação (*)
            * Divisão (/)
            
            * Módulo (%)
            * Exponencial (**)
            * Incrementar (++)
            * Decrementar (--) 
            
    Operadores lógico e Tabela verdade 

        Operadores Lógicos
            Operações lógicas em valores booleanos.     
                * && (E lógico)
                * || (OU lógico)
                * !  (NÃO lógico)
        
        Operações de Comparação, aritmétimos lógico

                * == (IGUAL a)
                * != (DIFERENTE)
                * === (MESMO VALOR e TIPO)
                * !== (DIFERENTE em VALOR e TIPO)
                
                * <  (MENOR que)
                * >  (MAIOR que)
                 
                *  <= (MENOR ou IGUAL a)
                * >=  (MAIOR ou IGUAL a)
        
    Ferramenta básica para estudo de lógica.

            X           Y         X&&Y
        Verdadeiro Verdadeiro Verdadeiro
        Verdadeiro    Falso      Falso
        Falso      Verdadeiro    Falso
        Falso         Falso      Falso

        
    Operadores de atribuição

        Atribuir um valor a uma variável, o mais básico é o "="
        
        Algumas variações:
            * +=
            * -=
            * *=
            * /=
              Operadores e Operações
                
========================================================================================================================================================

   
Instruções condicionais:

    IF-ELSE

        if: a instrução será executada apenas se a confição específica for verdadeira.
        else: a instrução será executada apenas se a condição específica for falsa.

    SWITCH

        É uma estrutura de CONTROLE que permite selecionar um dos vários bloco de código baseado 
            no valor de uma expressão (escolha).
        É uma alternativa mais organiza ao invéz do if...else repetidamente
    
    LAÇO e REPETIÇÃO

        Laçõs de repetição são também conhecidos como loops, do inglês.

            Objetivo: Executar um bloco de código várias vezes enquanto uma condição específica for verdadeira. 

            FOR: para
                for(int 1 = 0; i < 100; i++){
                // bloco de código }

            WHILE: enquanto
                n = 1;
                while (true) {
                // bloco de codigo
                n++;}

            DO - WHILE: faça enquanto
                do {
                // bloco de codigo } while (condição)

        



*/
 
            

       
      