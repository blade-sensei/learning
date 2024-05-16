
Un peu comme le [Jungle Speed](https://www.topito.com/go/509912/1774120), mais il n’y pas de totem, faut juste taper sur le tas comme au « tas de merde ». Oui on sait, c’est moins fun quand on se prend pas des coups d’ongle dans les phalanges, mais t’avais qu’à investir dans un vrai jeu de société.


On distribue les 52 cartes d’un jeu de cartes classique et personne ne regarde ses cartes, jusqu’ici tu devrais y arriver. Chacun leur tour, les joueurs posent une carte en comptant de 2 à As (2-3-4-5-6-7-8-9-10-Valet-Dame-Roi-As), ce qui formera le "tas"

## But
- Celui qui possède le plus de carte à la fin de la parti gagne
- Le jouer qui ne possède plus de cartes est éliminé

## Régles

- Si tu poses une carte correspondant au chiffre que tu dois dire, tout le monde tape sur le tas.
- Si deux cartes de la même valeur (sans compter le symbole ou couleur) se suivent, tout le monde tape sur le tas.
- Si la carte est un 7, il faut dire le chiffre dans sa tête (ex: 4-5-…-7-8)
	- si la personne dit le chiffre à haute voix alors les cartes devront être distribués à tous les joueurs (sauf celui qui vient de commettre l'erreur)

- Si la carte est un 10, tout le monde tape sur le tas
- Si la carte est une Dame, l’énonciation des chiffres change de sens (ex: Dame-Valet-10-9-8…)

- Si quelqu'un tape sur le tas, alors qu'il ne fallait pas le faire, la pile de carte du milieu est distribué entre tous les autres joueurs
- Celui qui tape en 1er récupère toutes les carte du tas

## Prérequis de l'app:
- jeux sur console/terminal
- Quand on dit "taper sur le tas" cela veut dire appuyer sur une touche
- On doit pouvoir jouer à 4 maximum, avant le la parti: 
	-  on doit pouvoir déclarer à combien de joueurs on jouera
	- chaque jouer doit choisir la touche qu'il veut appuyer.., par example le jouer 1 choisi le touche A, le jouer 2 la touche M.. etc 
- Entre chaque "tour", avant de dévoiler la prochaine carte on a un décompte de 2 secondes, ensuite on passe au tour du jouer suivant et on dévoile sa carte
- Lors que un jouer à remportez des cartes, ou quelqu'un a commis une erreur, avant de passer au tour de la personne suivante, on doit appuyer sur la touche "espace"
- lors que le jouer le plus rapide récupère les cartes, on doit les ajouter à son paquet de cartes
- Il est important d'affiche les cartes restantes de chaque joueur...

### Modélisation Minimal
Joueur
------ 
touchSelectionee
score
cartes: [...]
poserCarte()
ramasser()

Carte
------
chiffre
estDeMemeValeurQue(carteX):boolean

Plateau
--- 
joueurs: [...]
joueurEnCours
tasDeCarte: [...]
distribuerCartes() //distribution des cartes 


## Un coup de pouce

- vous pouvez faire une boucle while, qui devra vérifier si [TotalJoueurs - 1] joueurs  du plateau sont eliminés
- pour lancer une sorte de chronomètre entre chaque tour, [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) devrait suffire..
- la configuration des touches au début peut être "statique", vous attribuez d'office les touches A T et M (par EXAMPLE) à chaque joueur... et intégré la configuration des touches une fois que vous avez codé le jeu
- tester petit à petit chaque ajout de 2 / 3 lignes de codes
- pas besoin d'afficher TOUT le tas des cartes, les 5 derniers suffiront

```bash

> Configuration des joueurs...
Joueur 1, selectionnez votre touche:
Joueur 1 vous avez selectioné la touche "A"
....


cartes: A♠️ - 3♥️ - 10♣️ - Q👸 - J🥷
Joueur 1: nb de cartes: 10, ****
Joueur 2: nb de cartes: 5, ****
Joueur 3: nb de cartes: 2

reste 3... 2s... avant le tour du prochaine joueur:
tour du Joueur 2:
cartes: 3♥️ - 10♣️ - Q👸 - J🥷 - 4♥️
reste 3... 2... avant le tour du prochaine jouer:
> Le plus rapide est: Jouer 2
> Le Jouer 2 récupère le cas
> Le Jouer 3: ne possède plus de cartes.. ELIMINé TU RENTRES CHEZ TOI

Veuillez appuyer sur la touche "espace" pour continuer avec le joueur 3
...
tour du Jouer 3:
cartes: 10♣️ - Q👸 - J🥷 - 4♥️ - 4♠️
reste 3... 2... avant le tour du prochaine jouer:
tour du Jouer 1:
cartes: 10♣️ - Q👸 - J🥷 - 4♥️ - 4♠️

```
## Bonus

- On voit pouvoir arrêter la parti en cours avec la touche "esc"
- Afficher à la fin de la parti le classement