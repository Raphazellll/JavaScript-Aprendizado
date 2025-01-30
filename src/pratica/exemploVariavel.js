// Exemplo de uso de var, let e const em JavaScript
    const externo = "Olá, eu sou uma constante global!";

// Declaração de uma variável usando VAR
    function exemploVar() {
        if(true) {
            var mensagem = "Olá, Faculdade Descomplica! Eu sou uma var...";
        }
        console.log(mensagem);
    }
// Chamando a função exemplovar
    exemploVar();

// Exemplo de erro e correção

    var mensagem = "Olá, Faculdade Descomplica! Escopo externo!"
    console.log(mensagem);

// Declaração de uma variável usando LET
    function exemploLet() {
        if (true) {
            let mensagem = "Olá, Faculdade Descomplica! Eu sou uma let..."
            console.log(mensagem)
        }
        //console.log(mensagem) a variável LET só pode ser usada dentro da mesma.
    }
//Chamando a função let
    exemploLet();

// Exemplo de erro e correção
    let mensagem1 = "Olá, Descomplica! Let externo!"
    console.log(mensagem1)

    //variáves externas não podem ter o mesmo nome, se não, irá gerar um conflito

// Declaração de uma constante usando CONST
    function exemploConstante() {
        const mensagem = "Olá, Faculdade Descomplica! Eu sou uma constante..."
        console.log(mensagem)
    }
// Chamando a função exemploConstante
    exemploConstante();
// Exemplo externo de const
    console.log(externo);


