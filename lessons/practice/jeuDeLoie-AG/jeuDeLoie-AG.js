const prompt = require('prompt');
const colors = require("@colors/colors/safe");

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

function affichePlateau () {
    let plateauDeJeu = creerPlateauJeuOie(positionPion);
    console.log(plateauDeJeu);
}

function lancerDes() {
    let de1 = Math.floor(Math.random() * 6) + 1;
    let de2 = Math.floor(Math.random() * 6) + 1;
    return de1 + de2;
}

function casesSpeciales (de1, resultatDes, positionPion) {
    let nouvellePosition = positionPion;

    if (tour === 1 && resultatDes === 9) {
        if (de1 === 4 || de1 === 5) {
            nouvellePosition = 53
            console.log(colors.blue('Vous allez directement à la case:', nouvellePosition))
            return nouvellePosition; 
        } 
        else 
        {
            nouvellePosition = 26
            console.log(colors.blue('Vouz allez directement à la case:', nouvellePosition))
            return nouvellePosition; 
        }
    } 
    else if ((positionPion === 9 && tour > 1) || positionPion === 18 || positionPion === 27 || positionPion === 36 || positionPion === 45 || positionPion === 54) 
        {
        nouvellePosition = positionPion + resultatDes
        console.log(colors.blue('Ici une case “Oie”, ton pion est déplacé en fonction du résultat du lancé, '))
        console.log(colors.blue('Vous êtes maintenant sur la case:', nouvellePosition));
        return nouvellePosition; 
    } 
    else if (positionPion === 6 ) 
    {
        nouvellePosition = 12
        console.log(colors.blue('Case "pont" allez directement à la case:', nouvellePosition))
        return nouvellePosition; 
    } 
    else if (positionPion === 58 ) 
    {
        nouvellePosition = 1
        console.log(colors.red('Case "Tête de mort" retournez en case:', nouvellePosition));
        return nouvellePosition; 
    } else {
        return nouvellePosition
    }
}

let startTime = 0;
let endTime = 0;

function demarrerTimer() {
    startTime = Date.now();
}

function arreterTimer() {
    endTime = Date.now();
    let tempsEcoule = endTime - startTime;
    return tempsEcoule;
}

function afficherTemps(tempsEcoule) {
    let secondes = Math.floor(tempsEcoule / 1000);
    let minutes = Math.floor(secondes / 60);
    secondes = secondes % 60;
    console.log(colors.green(`Temps écoulé: ${minutes} minute(s) et ${secondes} seconde(s)`));
}


prompt.start();

prompt.message = colors.rainbow("Jeu de L'Oie ");

prompt.get([{ 
    name: 'nom', 
    description: colors.green('Quel est ton nom ?') 
}], function (err, result) {
    if (err) { 
        console.log('il y a eu une erreur'); 
    }
    console.log(colors.cyan('Bonjour ' + result.nom + ', bienvenue dans le jeu !'));
    affichePlateau ();
    jouer();
});


let tour = 1;
function jouer (de1) {
    prompt.get(colors.magenta("Veux-tu lancer les dés ?"), function (err, result) {
        if (err) { 
            console.log('il y a eu une erreur'); 
        } else {

            if (tour === 1) {
                demarrerTimer();
                console.log(colors.green("Le chrono à démaré"))
            }

            console.log('\nTour :', tour);
            
            let resultatDes = lancerDes();
            console.log("Résultat des dés:", resultatDes);
            
            positionPion = positionPion + resultatDes;
            console.log('vous êtes maintenant sur la case :', positionPion);

            positionPion = casesSpeciales(de1, resultatDes, positionPion);
            affichePlateau ()

            if(positionPion < 63) {

                tour++;
                jouer();
            } else if (positionPion === 63) {
                let tempsEcoule = arreterTimer();
                afficherTemps(tempsEcoule);

                console.log(prompt.message = colors.rainbow('*** Vous avez gagné ! ***'));
            } else if (positionPion > 63) {
                console.log(colors.blue('Vous avez dépassé la case 63'));
                positionPion = 63 - (positionPion - 63);

                console.log(colors.blue('Vous êtes maintenant sur la case :', positionPion));

                affichePlateau ()
                tour++;
                jouer();
                }
            }
        })
    }