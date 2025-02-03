// Imagien que ovcÊ está organizando uma festa de aniversário.
// os blocos de código são como diferentes áreas da festa, onde diferentes atividades acontecem.
// Por exemplo, você pode ter uma área para dançar, uma áre para jogos e uma área para cmomer


{
    // Área para jogos
    console.log("Vamos Jogar!");
    // Aqui vão as instruções para os jogos
    }
    
    {
    // Área de comer
    console.log("Hora de comer!");
    // Aqui vão as instruções para o buffet
    }
    

    {
// Área para dançar

console.log("Hora de dançar!");
console.log("\n")
danca:
for (let i = 0; i < 3; i++) {
    jogos:
    for (let j = 0; j < 3; j++) {
        if(i === 1 && j === 1) {
            console.log("A competição de dança foi interrompida!"); // Sai da competição de dança
            break danca;
        }
        console.log("Competidos " + (i+1) + " está dançando enquanto o competidor " + (j+1) + " está jogando.");
            
            }
        }
    }
