// mise en place
function creerPlateauJeuOie(positionPion) {
    const nombreCases = 64;
    let plateau = [];

    for (let i = 0; i < nombreCases; i++) {
        if (i === positionPion) {
            plateau.push('X');
        } else {
            plateau.push(i);
        }
    }
    return plateau;
}


let positionPion = 0; 
creerPlateauJeuOie(positionPion);

function lancerDes() {
    let de1 = Math.floor(Math.random() * 6) + 1;
    let de2 = Math.floor(Math.random() * 6) + 1;
    return de1 + de2;
}

// Jouer
// TODO: faire une question pour lancer les dés
let tour = 1;
function jouer(){
    console.log('\nTour :', tour)
    let resultatDes = lancerDes();
    console.log("Résultat des dés:", resultatDes);
    
    positionPion = positionPion + resultatDes;
    console.log('vous êtes maintenant sur la case :', positionPion);

    if (positionPion > 63) {
        console.log('Vous avez dépassé la case 63');
        positionPion = 63 - (positionPion - 63);
        console.log('Vous êtes maintenant sur la case :', positionPion); 
    } else if (positionPion === 63) {
        console.log('*** Vous avez gagné ! ***') ;
    }
    
    let plateauDeJeu = creerPlateauJeuOie(positionPion);
    console.log(plateauDeJeu);

    if (positionPion === 63) {
        return 'Vous avez gagné !';
    }
}

while (positionPion < 63) {
    jouer();
    tour++;
    if (positionPion < 63) {
        console.log('Veuillez passer au tour suivant');
    }
} 





