
Ce jeux va voir permettre de pratiquer vos bases du langage informatique, 
pour arriver à un jeu fonctionnel, vous n'avez pas besoin d'utiliser des notions avancées. Des conditions, boucles, fonctions, objects, listes suffiront.

## Niveau 1

Nous allons commencer très simple, normalement le jeux se déroule avec 2 joueurs,
mais pour le moment, 1 seul joueur pourra jouer. voici les règles du jeu:


- **le but**: Le jeu de l’oie se présente comme **un parcours en spirale de 63 cases**. Il se joue à 2 ou plus. Chaque joueur lance deux dés et avance son pion en fonction du résultat de son lancé. 

- Le but est d’**arriver exactement sur la 63e case, le jardin de l’oie**. 🏆

Le tour d’un joueur se déroule en **3 étapes simples** :

- Lancer les dés 🎲
- Déplacer son pion en fonction du résultat du lancer 
- Respecter les règles qui s’appliquent dans le cas où le joueur atterrit sur une case spéciale.

Le jeu de l’oie comprend des cases particulières. Voilà les règles concernant ces cases spéciales : 💫

- **Les cases de l’oie : 9 – 18 – 27 – 36 – 45 – 54** qui ont un dessin d’oie.  
    **Avancer du même montant que son lancé effectué**. Par exemple, si j’ai atterri sur une case “oie” en ayant réalisé 8 au lancer, j’avance encore de 8 cases. 
- **Le pont : case 6 : aller directement à la case 12.**
- **La tête de mort : la case 58 :** Oui, un vrai signe de mort… Du calme, vous n’allez pas perdre la partie 😅. Vous êtes juste contraint de….. **recommencer la partie depuis le début. Retour donc à la case 1 !**

Au début de la partie seulement: 
- **Les 9 au départ :** au début de la partie (case 0), obtenir 9 points aux dés a une grande implication. Cela dépend de la façon dont le 9 a été obtenu :
	- **Un 4+5 force le joueur à se déplacer directement sur la case 53** ! 
	- **Un 6+3 aux dés place le joueur en case 26.** Bien que cela n’équivaut pas un 9 en 4+5, c’est déjà une avance considérable.

Le jeux doit pouvoir être joué à travers le terminal / console, à vous de choisir la façon dont vous affiché le tableau ou chaque tour

Un peu coup de pouce:
- Le jeux peut se baser sur une boucle while() qui vérifiera si le jouer est arrivé à la case 63 (pile) si non on relance un tour.
- Pour l'affichage on peut utiliser une tableau qui sera affiché sur le terminal :
	- x peut représenter le pion du joueur
	- 0: est le départ
	- on peut afficher le tableau à chaque tour et ensuite compléter avec des messages si vous devez lancer les dés ou si vous êtes tombé sur une case especial etc

```bash

tour: 1
tableau:
[0, 1, 2, 3, 5, 6, x, 8, ....,61, 62, 63]
appuyer sur espace pour lancer les dés...

tour: 2
tableau:
[1, 2, 3, 5, 6, x, 8, ....,61, 62, 63]
dés résultat: 2 + 3 = 5
vous avancez de 5...
vous êtes maintenant sur la case: 5

tour: 3
tableau:
[1, 2, 3, 5, 6, x, 8, ....,61, 62, 63]
dès résultat: 2 + 2 = 4
vous avancé de 4...
vous êtes maintenant sur la case: 9
case spécial !: le 9, vous avancez encore de: 4
vous êtes maintenant sur la case: 13

```

## Bonus

- afficher le temps debut de partie et fin de partie pour avoir le delta à la fin.
## Références 

- règles: https://regles2jeux.fr/regle-du-jeu-de-loie/