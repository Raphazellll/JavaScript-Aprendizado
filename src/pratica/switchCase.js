//SWITCH 

// Função que recebe a cor do semáforo e decide a ação do pedestra 

function checkTraffickLight(lightColor) {
    
    switch (lightColor) {
        case 'Verde':
            console.log("Pode atravessar.");
            break;
        case 'Amarelo':
            console.log("Prepare-se para parar.");
            break;
        case 'Vermelho': 
            console.log("Não pode atravessar, aguarde o momento certo.");
            break;
        default:
            console.log("Cor do semáforo indisponível. aguarde uma cor válida.");
            
    }


checkTraffickLight('Verde')
checkTraffickLight('Amarelo')
checkTraffickLight('Vermelho')
checkTraffickLight('Azul')

}