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
*/