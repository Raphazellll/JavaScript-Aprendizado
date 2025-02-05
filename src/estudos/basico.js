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

        
========================================================================================================================================================


    STRINGS

        Em JavaScript, strings são sequências de caracteres e são um dos tipos de dados mais usados. Você pode criar,
            manipular e realizar várias operações com strings.

    Criando Strings
        Você pode criar strings de diferentes maneiras: com aspas simples ('), aspas duplas (") 
            ou template literals com crase (`).

            let stringAspasSimples = 'Olá, mundo!';
            let stringAspasDuplas = "Olá, mundo!";
            let stringTemplateLiteral = `Olá, mundo!`;


    Métodos Comuns de Strings
            Aqui estão alguns dos métodos mais comuns para trabalhar com strings em JavaScript:

            O método length retorna o número de caracteres de uma string;

            console.log(frase.length);  // 12
            let frase = "Olá, mundo!";

            Acessando Caracteres;

            Você pode acessar caracteres individuais de uma string usando a notação de índice (começando de 0).

                    let frase = "Olá, mundo!";
                    console.log(frase[0]); // "O"

            Método toUpperCase()
            Converte todos os caracteres de uma string para maiúsculas.

                    let frase = "olá, mundo!";
                    console.log(frase.toUpperCase());  // "OLÁ, MUNDO!"

            Método toLowerCase()
            Converte todos os caracteres de uma string para minúsculas.

                    let frase = "OLÁ, MUNDO!";
                    console.log(frase.toLowerCase());  // "olá, mundo!"

            Método trim()
            Remove os espaços em branco no início e no final de uma string.

                    let frase = "   Olá, mundo!   ";
                    console.log(frase.trim());  // "Olá, mundo!"

            Método substring()
            Retorna uma parte da string, começando e terminando em índices específicos.

                    let frase = "Olá, mundo!";
                    console.log(frase.substring(0, 3));  // "Olá"

            Método replace()
            Substitui parte de uma string por outra.

                    let frase = "Olá, mundo!";
                    console.log(frase.replace("mundo", "JavaScript"));  // "Olá, JavaScript!"

            Método split()
            Divide uma string em um array, usando um delimitador específico.

                    let frase = "Olá, mundo!";
                    let palavras = frase.split(", ");
                    console.log(palavras);  // ["Olá", "mundo!"]

            Método indexOf()
            Retorna o índice da primeira ocorrência de um valor em uma string. Retorna -1 se não encontrado

                    let frase = "Olá, mundo!";
                    console.log(frase.indexOf("mundo"));  // 5


                    
        A concatenação de strings em JavaScript é o processo de combinar duas ou mais strings em uma única.
            Existem várias maneiras de fazer isso. Aqui estão as formas mais comuns de concatenar strings:

        1. Usando o operador +
            O operador + é a maneira mais tradicional de concatenar strings.

                    let nome = "João";
                    let saudacao = "Olá, " + nome + "!";
                    console.log(saudacao);  // "Olá, João!"

        2. Usando o operador +=
            Você pode usar o operador += para adicionar uma string a outra, modificando a string original.

                    let frase = "Olá";
                    frase += ", Mundo!";
                    console.log(frase);  // "Olá, Mundo!"

        3. Usando Template Literals (Crase `)
            Os template literals (ou template strings) são uma maneira moderna e mais legível de concatenar strings. 
                Eles permitem embutir variáveis dentro de strings de forma mais prática, usando ${}.     
                
                    let nome = "João";
                    let saudacao = `Olá, ${nome}! Como você está?`;
                    console.log(saudacao);  // "Olá, João! Como você está?"

        4. Usando o método concat()
            O método concat() é uma forma explícita de concatenar duas ou mais strings. 
                No entanto, é menos usado hoje em dia em comparação com as outras abordagens,
                pois as outras são mais simples e legíveis.

                    let saudacao = "Olá, ";
                    let nome = "João";
                    let mensagem = saudacao.concat(nome, "!");
                    console.log(mensagem);  // "Olá, João!"
        5. Concatenando com Arrays (em casos mais complexos)
            Você também pode usar o método join() de arrays para concatenar várias strings de maneira eficiente.

                    let partes = ["Olá", "João", "como", "vai?"];
                    let mensagem = partes.join(" ");
                    console.log(mensagem);  // "Olá João como vai?"


    Qual usar?

    Operador + e +=: São mais simples e amplamente utilizados.

    Template literals: São mais legíveis, especialmente quando você precisa embutir expressões ou variáveis dentro da string.

    Método concat(): Pode ser útil em alguns casos, mas é menos popular atualmente, pois o operador + é mais direto e legível.

    join(): Útil quando você precisa concatenar muitas partes de uma vez e deseja adicionar separadores entre elas.

    A escolha entre essas opções depende do seu estilo de codificação e do caso específico. Normalmente, 
        template literals são preferidos por sua clareza e flexibilidade.




========================================================================================================================================================


    Arquivos JSON
        JSON (JavaScript Object Notation) é um formato leve de troca de dados e é fácil de ler e escrever, 
            tanto para humanos quanto para máquinas. Em JavaScript, é comumente usado para enviar e receber dados de servidores.

        Aqui está um exemplo básico de JSON em JavaScript:

{
  "nome": "João",
  "idade": 30,
  "endereco": {
    "rua": "Rua das Flores",
    "numero": 123
  },
  "telefones": ["1234-5678", "9876-5432"]
}

        Explicação:

"nome": uma chave que mapeia para o valor "João".
"idade": uma chave que mapeia para o valor 30.
"endereco": um objeto aninhado que contém duas chaves: "rua" e "numero".
"telefones": um array de strings que contém dois números de telefone.




*/
 
            

       
      