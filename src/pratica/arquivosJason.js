// Exemplo: Manipulação de dados JSON

// Objeto JSON inicial

    let pessoa = {

        "nome": "Joao", 
        "idade": 30,
        "endereco": {
            "rua": "Rua Principal",
            "numero": 123
        },
         "telefone": ["1234-5678", "8765-4321"]
    };

console.log(pessoa);

// Acessar Dados

console.log("\nAcessar dados:");
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);
console.log(pessoa["telefone"][0]);
console.log(pessoa["telefone"][1]);

// Adicionar dados
console.log("\nAdicionar dados:");
pessoa.email = "raphael@example.com";
console.log(pessoa);

// Modificar Dados
console.log("\nModificar dados:");
pessoa.idade = 31;
pessoa.endereco.rua = "Rua Secundária";
console.log(pessoa);

// Remover Dados
console.log("\nRemover dados:");
delete pessoa.telefone;
console.log(pessoa);

/* Existência da Propriedade: Se a propriedade não existir no objeto,
    o operador delete não causará um erro, apenas não fará nada.
    O operador delete não pode ser usado para remover variáveis declaradas com var, let ou const
    ele so funciona para propriedade de objetos.
*/

console.log(pessoa);

// Operações com Arrays
console.log("\nOperadores com Arrays:");
pessoa.hobbies = ["leitura", "esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens"); // Operação expecifica de arrays
console.log(pessoa.hobbies);

// Converter de e para JSON
console.log("\nConverter de e para JSON:");
let jsonTexto = JSON.stringify(pessoa);
console.log(jsonTexto);

let objetoPessoa = JSON.parse(jsonTexto);

console.log(objetoPessoa);

