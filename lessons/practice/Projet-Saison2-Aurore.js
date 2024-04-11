const prompt = require('prompt');
const colors = require('colors/safe');

// initialisation du jeu
const jeuDeCartes = [
    2, 2, 2, 2,
    3, 3, 3, 3,
    4, 4, 4, 4,
    5, 5, 5, 5,
    6, 6, 6, 6,
    7, 7, 7, 7,
    8, 8, 8, 8,
    9, 9, 9, 9,
    10, 10, 10, 10,
    11, 11, 11, 11, // Valet
    12, 12, 12, 12, // Dame
    13, 13, 13, 13, // Roi
    14, 14, 14, 14  // As
];

let joueurs;

// Définition de la classe Joueur
function Joueur(nomDuJoueur, toucheSelectionnee) {
    this.nomDuJoueur = nomDuJoueur;
    this.toucheSelectionnee = toucheSelectionnee;
    this.jeuDuJoueur = [];
}

// Définition de la classe Plateau
class Plateau {
    constructor(joueurs) {
        this.joueurs = joueurs;
    }
}

// Fonction pour définir le nombre de cartes par joueur
function definirNombreDeCartesParJoueurs(nombreDeJoueurs) {
    return jeuDeCartes.length / nombreDeJoueurs;
}

// Fonction pour distribuer les cartes à un joueur
function distribuerLesCartes(jeuDuJoueur, nombreDeCartesParJoueurs, jeuDeCartes) {
// console.log('ici je rentre ds fonction distribuerLesCartes')
// console.log('Début de la distribution des cartes pour', jeuDuJoueur);
    if (jeuDuJoueur.length === 0) {
        for (let i = 0; i < nombreDeCartesParJoueurs; i++) {
            const carteADistribuer = Math.floor(Math.random() * jeuDeCartes.length);
            jeuDuJoueur.push(jeuDeCartes.splice(carteADistribuer, 1)[0]);
        }
    }}

function distribuerLeTas(joueurs) {
    const nombreDeCartesDansTas = tas.length;
    const nombreDeJoueurs = joueurs.length;
    const nombreDeCartesParJoueur = Math.floor(nombreDeCartesDansTas / nombreDeJoueurs);

    let carteIndex = 0;
    for (const joueur of joueurs) {
        joueur.jeuDuJoueur.push(...tas.slice(carteIndex, carteIndex + nombreDeCartesParJoueur));
        carteIndex += nombreDeCartesParJoueur;
    }

    // Vider le tas 
    tas = [];
}
    
// Fonction pour démarrer le jeu
function demarrerJeu() {
    let nombreDeJoueurs;
    prompt.start();
    prompt.message = colors.rainbow("Jeu de cartes - Snap ");
    prompt.get([{ 
        name: 'nombreDeJoueurs', 
        description: colors.green('Combien il y a de joueurs (entre 2 et 4)') 
    }], function (err, result) {
        if (err) { 
            console.log('Il y a eu une erreur'); 
            return;
        }
        console.log(colors.cyan('Je distribue les cartes pour ' + result.nombreDeJoueurs + ' joueurs'));
        const nombreDeCartesParJoueurs = definirNombreDeCartesParJoueurs(result.nombreDeJoueurs);
        nombreDeJoueurs = result.nombreDeJoueurs;

        // Création des joueurs
        const joueurs = [];
        const touchesDisponibles = ['A', 'B', 'C', 'D']; 

        for (let i = 0; i < result.nombreDeJoueurs; i++) {
            const nomDuJoueur = "Joueur" + (i + 1);
            const toucheSelectionnee = touchesDisponibles[i]; 
            const nouveauJoueur = new Joueur(nomDuJoueur, toucheSelectionnee);
            joueurs.push(nouveauJoueur);
        }

        // Distribuer les cartes à chaque joueur
        for (const joueur of joueurs) {
            distribuerLesCartes(joueur.jeuDuJoueur, nombreDeCartesParJoueurs, jeuDeCartes);
            // console.log('Après appel à distribuerLesCartes, jeuDuJoueur:', joueur.jeuDuJoueur);
        }
        // console.log('avant return', joueurs)
        jouerUnTour(joueurs, 0)
    });
}

// Démarrer le jeu
demarrerJeu();

// Premier tour

// Pour chaque tour de jeu :
// Afficher les cartes restantes de chaque joueur.

let tas = [];

function poserUneCarte(joueur) {
    tas.push(joueur.jeuDuJoueur.splice(0, 1)[0]);
    console.log('ici tas après poser une carte', tas)
}

function jouerUnTour(joueurs, index) {
    if (index < joueurs.length) {
        const joueur = joueurs[index];
        // afficherCarteAttendue();

        //setTimeout
        let tempsRestant = 5;
        console.log("Tas actuel:", tas); 
        console.log(`Temps restant pour 'Taper': ${tempsRestant} secondes`);
        console.log(`Voulez-vous "taper" ?`); 
        

        setTimeout(() => {
            poserUneCarte(joueur);

            prompt.get([{
                name: 'reponse',
            }], function (err, result) {
                if (err) {
                    console.log('Il y a eu une erreur');
                    return;
                }
                const reponse = result.reponse;
                reglesDuJeu(reponse, joueur);
            });
            // console.log('Après premier tour, jeuDuJoueur:', joueur.jeuDuJoueur);

            const derniereCarteDansTas = tas[tas.length - 1];
            carteAttendue = 2;
            if (derniereCarteDansTas === carteAttendue) {
                joueur.jeuDuJoueur.push(...tas);
                console.log(`Le joueur ${joueur.nomDuJoueur} a tapé sur le tas et récupère les cartes`);
                console.log('ici joueurs après tappé', joueurs);
            } else {
                console.log(`Le joueur s'est trompé , on redistribue le tas`);
            }

            // Passez au joueur suivant
            jouerUnTour(joueurs, index + 1);
        }, tempsRestant * 1000);
    } else {
        console.log("Fin du tour");
    }
}

function afficherCarteAttendue(numeroCarte= 2) {
    console.log(`Carte attendue : ${numeroCarte}`);
}

function reglesDuJeu(toucheSaisie, joueur) {
    if (toucheSaisie === joueur.toucheSelectionnee) {
        console.log(`Le joueur ${joueur.nomDuJoueur} a appuyé sur la touche ${toucheSaisie}`);
    } else {
        
        console.log(`aucune touche saisie`);
    }


//  Si tu poses une carte correspondant au chiffre que tu dois dire, tout le monde tape sur le tas.

// Si deux cartes de la même valeur (sans compter le symbole ou couleur) se suivent, tout le monde tape sur le tas.

// Si la carte est un 7, il faut dire le chiffre dans sa tête (ex: 4-5-…-7-8)

// si la personne dit le chiffre à haute voix alors les cartes devront être distribués à tous les joueurs (sauf celui qui vient de commettre l'erreur)
// Si la carte est un 10, tout le monde tape sur le tas

// Si la carte est une Dame, l’énonciation des chiffres change de sens (ex: Dame-Valet-10-9-8…)

// Si quelqu'un tape sur le tas, alors qu'il ne fallait pas le faire, la pile de carte du milieu est distribué entre tous les autres joueurs

// Celui qui tape en 1er récupère toutes les carte du tas
}


 