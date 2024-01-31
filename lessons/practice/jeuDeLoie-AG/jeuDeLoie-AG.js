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
    return 50 + 8;
}

// Jouer
// TODO: faire une question pour lancer les dés
let tour = 1;
function jouer () {
    console.log('\nTour :', tour)
    
    let resultatDes = lancerDes();
    console.log("Résultat des dés:", resultatDes);
    
    positionPion = positionPion + resultatDes;


    //TODO: a changer en fonction du résultat de chaque dès
    // if (tour === 1 && resultatDes === 9 ) {
    //     positionPion = 53
    //     console.log('Grâce à ton 9 à ce premier tour, ')
    // }
    console.log('vous êtes maintenant sur la case :', positionPion);


    // cases spéciales
    if (positionPion === 9 || positionPion === 18 || positionPion === 27 || positionPion === 36 || positionPion === 45 || positionPion === 54) {
        positionPion = positionPion + resultatDes
        console.log('Ici une case “oie”, tu peux avancer déplacer son pion en fonction du résultat du lancer, ')
    }

    if (positionPion === 6 ) {
    positionPion = 12
    console.log('Case "pont" aller directement à la case 12, ')
    }

    if (positionPion === 58 ) {
        positionPion = 1
        console.log('Case "Tête de mort" retourner en case 1, ')
    }

    if (positionPion > 63) {
        console.log('Vous avez dépassé la case 63');
        positionPion = 63 - (positionPion - 63);
        console.log('Vous êtes maintenant sur la case :', positionPion); 
    } else if (positionPion === 63) {
        console.log('*** Vous avez gagné ! ***') ;
    }
    

    // creation du plateau
    let plateauDeJeu = creerPlateauJeuOie(positionPion);
    console.log(plateauDeJeu);

    if (positionPion === 63) {
        return 'Vous avez gagné !';
    }
}

jouer();
// while (positionPion < 63) {
//     jouer();
//     tour++;
//     if (positionPion < 63) {
//         console.log('Veuillez passer au tour suivant');
//     }
// } 





