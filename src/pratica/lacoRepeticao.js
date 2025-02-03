// Exemplo FOR

for (let rua = 1; rua <= 10; rua++) {

    console.log("Entrega feita na rua: " + rua);
    
}
console.log("\n")

// Exemplo WHILE
let flexao = 0;
let cansaco = false;
while (!cansaco) {
    flexao++
    console.log("Eu fiz: " + flexao + " flexões.")

    if (flexao === 10) {
        cansaco = true;
    }
    
}
console.log("\n")

// Exemplo DO - WHILE
let tempoDeAndar = 0;
let caiu = false;

do {
    tempoDeAndar++;
    console.log("Andando de bicicleta por " + tempoDeAndar + " minutos.");
    if (tempoDeAndar === 10) {
        caiu = true;
    }
} while (!caiu && tempoDeAndar < 10);