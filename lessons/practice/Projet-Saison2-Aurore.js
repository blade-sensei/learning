const prompt = require('prompt');
const colors = require('colors/safe');
const readline = require('readline');

const jeuDeCartes = [
    // 2, 2, 2, 2,
    // 3, 3, 3, 3,
    // 4, 4, 4, 4,
    // 5, 5, 5, 5,
    // 6, 6, 6, 6,
    7, 7, 7, 7,
    // 8, 8, 8, 8,
    9, 9, 9, 9,
    10, 10, 10, 10,
    // 11, 11, 11, 11, // Valet
    // 12, 12, 12, 12, // Dame
    // 13, 13, 13, 13, // Roi
    // 14, 14, 14, 14  // As
];

function Joueur(nomDuJoueur, toucheSelectionnee, plateau) {
    this.nomDuJoueur = nomDuJoueur;
    this.toucheSelectionnee = toucheSelectionnee;
    this.jeuDuJoueur = [];
    this.estElimine = false;
    this.plateau = plateau;

    this.poserUneCarte = function (tas, joueurs) {
        if (this.jeuDuJoueur.length === 0) {
            this.estElimine = true;
            plateau.eliminerUnJoueur(nomDuJoueur);

            if (joueurs.filter(j => !j.estElimine).length === 1) {
                const joueurGagnant = joueurs.find(j => !j.estElimine);
                console.log(`**** Le joueur ${joueurGagnant.nomDuJoueur} a gagné la partie! ****`);
                plateau.afficherClassement()
            }
        } else {
            const carte = this.jeuDuJoueur.shift();
            tas.push(carte);
            console.log(`Le joueur ${this.nomDuJoueur} a posé la carte ${carte}`);
            return;
        }
    }

    this.ajouterCarte = function (carte) {
        this.jeuDuJoueur.push(carte);
        // this.playerGame
    }
}


function Carte (plateau) {
    this.plateau = plateau;
    this.estDeMemeValeurQue = function (valeurCartePosee, joueurTouche) {
        const tas = this.plateau.tas;
        if (tas.length >= 2 && valeurCartePosee === tas[tas.length - 2]) {
            console.log("Deux cartes de même valeur se suivent ! Tout le monde tape sur le tas");
            plateau.recupereLeTas(joueurTouche)
        }

        if (valeurCartePosee === 10) {
            console.log("La carte posée est un 10 ! Tout le monde tape sur le tas");
            plateau.recupereLeTas(joueurTouche)
        }

        if (valeurCartePosee === 7) {
            console.log(`La carte posée est un 7`);
            prompt.get([{ 
                name: 'reponse',
                description: `Joueur ${this.nomDuJoueur}, avez-vous dit le chiffre à haute voix ? (oui/non)` 
            }], (error, result) => {
                const reponse = result.reponse.toLowerCase();
                if (reponse === 'oui') {
                    plateau.recupereLeTas(joueurTouche);
                } else {
                    plateau.redistribuerLeTas();
                }
            });
        }
    }
}

function Plateau() {
    this.joueurs = [];
    this.tas = [];
    this.ordreElimination = [];

    this.creationDeJoueurs = async function(nombreDeJoueurs) {
        const touchesDisponibles = ['A', 'B', 'C', 'D'];

        for (let i = 0; i < nombreDeJoueurs; i++) {
            const nomDuJoueur = "Joueur" + (i + 1);
            const toucheSelectionnee = touchesDisponibles[i];
            const nouveauJoueur = new Joueur(nomDuJoueur, toucheSelectionnee, this);
            this.joueurs.push(nouveauJoueur);
        }
    }

    this.distribuerLesCartes = function() {
        const cartesADistribuer = Math.floor(jeuDeCartes.length / this.joueurs.length);

        for (const joueur of this.joueurs) {
            for (let i = 0; i < cartesADistribuer; i++) {
                const carteADistribuer = Math.floor(Math.random() * jeuDeCartes.length);
                const carte = jeuDeCartes.splice(carteADistribuer, 1)[0];
                joueur.ajouterCarte(carte);
            }
        }
    };

    this.ajouterAuTas = function(carte) {
        console.log(`Carte ajoutée au tas: ${carte}`);
        this.tas.push(carte);
    };

    this.eliminerUnJoueur = function(nomDuJoueur) {
        console.log(`${nomDuJoueur} est éliminé!`)
        const joueur = this.joueurs.find(j => j.nomDuJoueur === nomDuJoueur);
        if (joueur) {
            joueur.estElimine = true;
            if (!this.ordreElimination.includes(joueur)) { 
                this.ordreElimination.push(joueur);
            }
        }
    };

    this.recupereLeTas = function(joueurTouche) {
        if (this.joueurs.length > 0 && joueurTouche) {
            joueurTouche.jeuDuJoueur = joueurTouche.jeuDuJoueur.concat(this.tas);

            this.tas = [];
        }
    }

    this.redistribuerLeTas = function() {
        console.log('le tas est redistribué')
        console.log('Joueurs avant redistribution:', this.joueurs)
        console.log('Tas avant redistribution:', this.tas)
        const nombreDeJoueurs = this.joueurs.length;
        const cartesADistribuer = Math.floor(this.tas.length / nombreDeJoueurs);

        let indexCarte = 0;
        for (let i = 0; i < nombreDeJoueurs; i++) {
            for (let j = 0; j < cartesADistribuer; j++) {
                this.joueurs[i].jeuDuJoueur.push(this.tas[indexCarte]);
                indexCarte++;
            }
        }

        while (indexCarte < this.tas.length) {
            this.joueurs[0].jeuDuJoueur.push(this.tas[indexCarte]);
            indexCarte++;
        }

        this.tas = [];
        };

        this.afficherClassement = function() {
            const joueursNonElimines = this.joueurs.filter(function(joueur) {
                return !joueur.estElimine;
            });
            const ordreEliminationInverse = this.ordreElimination.slice().reverse();

            const classementComplet = joueursNonElimines.concat(ordreEliminationInverse);
    
            const lignesDeClassement = classementComplet.map(function(joueur, index) {
                return (index + 1) + ". " + joueur.nomDuJoueur + " - " + joueur.jeuDuJoueur.length + " cartes";
            });
    
            console.log('Classement des joueurs:');
            console.log(lignesDeClassement.join('\n'));
        };
    }

async function demarrerJeu() {
    const plateau = new Plateau();

    prompt.start();
    prompt.message = colors.rainbow("Jeu de cartes - Snap ");
    const result = await prompt.get([{ 
        name: 'nombreDeJoueurs', 
        description: colors.green('Combien il y a de joueurs (entre 2 et 4)') 
    }]);


    await plateau.creationDeJoueurs(parseInt(result.nombreDeJoueurs));
    plateau.distribuerLesCartes();


    const carte = new Carte(plateau);   

    const readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    async function jouerUnTour(joueurs, index) {
        if (index < joueurs.length) {
            const joueur = joueurs[index];
    
            let tempsRestant = 1;
            console.log(`Temps restant pour 'Taper': ${tempsRestant} secondes`);
            const resultat = await prompt.get([{ 
                name: 'reponse', 
                description: colors.green('Appuyez sur une touche pour "taper"') 
            }])

            const toucheTapee = resultat.reponse.toUpperCase();
            const joueurTouche = joueurs.find(joueur => joueur.toucheSelectionnee === toucheTapee);

            if (joueurTouche) {
                    console.log(`Le joueur ${joueurTouche.nomDuJoueur} a tapé.`)
                } else {
                    joueur.poserUneCarte(plateau.tas, joueurs);
                }
                

                const valeurCartePosee = plateau.tas[plateau.tas.length - 1];
                carte.estDeMemeValeurQue(valeurCartePosee, joueurTouche);
    
                console.log("Tas actuel:", plateau.tas); 
    
                await new Promise(resolve => setTimeout(resolve, tempsRestant * 1000));
  
                await jouerUnTour(joueurs, index + 1);
        } else {
            console.log("Fin du tour");
    }}

    async function jouerPartie(joueurs) {
        const nombreDeToursMax = 10;
        let tour = 1;

        while (tour <= nombreDeToursMax) {
            console.log(`Tour ${tour}`);
            await jouerUnTour(joueurs, 0);
            if (joueurs.filter(j => !j.estElimine).length <= 1) {
                break;
            }
            tour++;
        }
    }

    jouerPartie(plateau.joueurs);

}

demarrerJeu().then(() => console.log('start game'));


const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.input.on('keypress', (str, key) => {
    if (key.sequence === '\u001b') {
        console.log('Touche esc appuyée, le jeu est terminé');
        readLine.close();
    }
});
