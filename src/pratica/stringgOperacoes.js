// Método Slice
// Temos ums String com várias frutas
let frutas = "maça, banana, laranja, uva, abacaxi";
console.log("Tamanho da string frutas: ", frutas.length);
console.log("\n");

// Queremos obter uma parte da String, por exemplo, apenas "banana, laranja"
let parteFrutas = frutas.slice(5, 21);
console.log("Resultado do slice():", parteFrutas);
console.log("\n");

// Método Trim
// Temos uma string com espaços em branco no início e no final
console.log("            Abacate         ");
let frutaComEspaco = "            Abacate         ";
frutaComEspaco = frutaComEspaco.trim();
console.log("Resultado do trim:", frutaComEspaco);
console.log("\n");

// Método Split
// Queremos dividir a tring em uma array de substring, usando a vírgula como separador
let listaDeFrutas = "maça,babana,laranja,uva,abacaxi";
let arraydeFrutas = listaDeFrutas.split(",");
console.log("Resultado do split():", arraydeFrutas);
// Testando cada fruta separadamente
console.log("\n");


// Criação de Strings com nomes de animais:
    let animal1 = "Elefante";
    let animal2 = "Girafa";
    let animal3 = "Zebra";

// Método substring
//Pega parte da string 'Elefante', começando no índice 3 até o índice 7
    let parteAnimal1 = animal1.substring(3, 7)
    console.log("Resultado substring: ", parteAnimal1);
    console.log("\n");

// Método replace
// Substitui a substring 'ra' por 're' em 'Girafa'
let novoAnimal2 = animal2.replace("ra", "re");
console.log("Resultado do replace: ", novoAnimal2);
console.log("\n");

// Método concat
// Concatena as strings 'Elefante', 'Girafa' e 'Zebra' com espaços entre elas
let animaisJuntos = animal1.concat(" ", animal2, " ", animal3);
console.log("Resultado concat():", animaisJuntos);
console.log("\n");

// Definindo uma string de exemplo
let nome = "Raphael Martins Pimenta";
console.log("Nome inicial: " + nome);

// Método toLowerCase
// Usando o método para converter todos os caracteres alfabéticos para minúsculas
let nomeMinusculo = nome.toLowerCase();
console.log("Nome em minúsculas: " + nomeMinusculo);




// Método toUpperCase

// Usando o método para converter todos os alfabéticos para maiúsculas
let nomeMaiusculo = nome.toUpperCase();
console.log("Nome em maiúsculas: " + nomeMaiusculo);



