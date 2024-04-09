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

// const tas = [];

// Définition de la classe Joueur
function Joueur(nomDuJoueur, toucheSelectionnee) {
    this.nomDuJoueur = nomDuJoueur;
    this.toucheSelectionnee = toucheSelectionnee;
    this.jeuDuJoueur = [];
}

// Création des joueurs
const joueur1 = new Joueur("Joueur1", "A");
const joueur2 = new Joueur("Joueur2", "B");
const joueurs = [joueur1, joueur2];


// Définition de la classe Plateau
class Plateau {
    constructor(joueurs) {
        this.joueurs = joueurs;
    }
}

// Fonction pour définir le nombre de cartes par joueur
function definirNombreDeCartesParJoueurs() {
    return jeuDeCartes.length / joueurs.length;
}

// Fonction pour distribuer les cartes à un joueur
function distribuerLesCartes(jeuDuJoueur, nombreDeCartesParJoueurs, jeuDeCartes) {
console.log('ici je rentre ds fonction distribuerLesCartes')
console.log('Début de la distribution des cartes pour', jeuDuJoueur);
        for (let i = 0; i < nombreDeCartesParJoueurs; i++) {
            const carteADistribuer = Math.floor(Math.random() * jeuDeCartes.length);
            jeuDuJoueur.push(jeuDeCartes.splice(carteADistribuer, 1)[0]);
        }
    }

// Fonction pour démarrer le jeu
function demarrerJeu() {
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
        
        // Distribuer les cartes à chaque joueur
        for (const joueur of joueurs) {
            console.log('Avant appel à distribuerLesCartes, jeuDuJoueur:', joueur.jeuDuJoueur);
            distribuerLesCartes(joueur.jeuDuJoueur, nombreDeCartesParJoueurs, jeuDeCartes);
            console.log('Après appel à distribuerLesCartes, jeuDuJoueur:', joueur.jeuDuJoueur);
        }
    });
}

// Démarrer le jeu
demarrerJeu();





