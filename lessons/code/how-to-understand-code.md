# How to understand code

## Lecture / Interpréation
L'ordinateur qui va executer notre code, fait un travail de lecture / parcours des instruction que nous en tant que dev on crée

pour mieux comprendre comment le code est intérprété et ce qu'il faut on va se concentrer sur chaque changement dans les variables 

et on va lire ligne par ligne.. par example si on devrait le lire à voix haute, dans l'example ci-dessous

- ligne 1:  initialize une variable menu avec la valeur "mac first"
- ligne 2: initialize varuable prix avec la valeur 7
- ligne 3: ...
- ligne 4 (rien)
- ligne 5: créer d'un object
- ligne 6: ajout de propriété avec la clé "menuCommande" et valeur de la variable menu
- ligne 7...
- ligne 12: affichage dans la console de variable commande 

Example

```javascript
const menu = "macFirst";
const prix = 7;
const numero = "20";

const commande = { 
  menuCommande: menu,
  prixCommande: prix,
  numeroCommande: numero,
}

commande.prixCommande = 6;
console.log(commande);
```

Pour avoir une représentation "mentale" avec de l'entrainement, on peut déjà faire un tableau pour voir l'évolution des valeurs de chaque variable selon l'avancement du code

Tableau

| ligne code / variable | Menu       | prix | numero | Commande                       | Terminal            |
| --------------------- | ---------- | ---- | ------ | ------------------------------ | ------------------- |
| 1                     | "macFirst" |      |        |                                |                     |
| 2                     |            | 7    |        |                                |                     |
| 3                     |            |      | "20"   |                                |                     |
| 4                     |            |      |        |                                |                     |
| 5                     |            |      |        | {}                             |                     |
| 6                     |            |      |        | menuCommande = "marfirst"      |                     |
| 7                     |            |      |        | prixCommande = prix (7         |                     |
| 8                     |            |      |        | numeroCommande = numero ("20") |                     |
| 9                     |            |      |        |                                |                     |
| 10                    |            |      |        | prixCommande = 6               |                     |
| 11                    |            |      |        |                                | "marfirst", 6, "20" |





Exercice

```javascript
const menu = "macFirst";
const prix = 7;
const numero = "20";


const commande = { 
  menuCommande: menu,
  prixCommande: prix,
  numeroCommande: numero,
}

commande.prixCommande = 6;
commande.numeroCommande = "19";
commande.prixTotal = 50;

console.log(commande);

const commande2 = {
menuCommande: "bigMac",
prixCommande: 12,
numeroCommande: numero,
}

console.log(commande2)
commande2.numeroCommande = "19";

function saluer(){
  console.log('Bonjour client', client.firstName);
};
saluer();


function commander(){
	client.numetoTel = "456789778";
	client.commande = commande;
 	console.log(client);
}
commander();
```

Attention pour les créations de functions 

Quand le code est parcourue il va d'abord "définir" les function, mais cela ne les fait pas executer

l'execution des function est faite avec un "appel" en utilisant les paranthèses () example: `commander()`

arrivant à `console.log(client)`  cette ligne n'a pas encore écrit dans le terminal, c'est à partir de la ligne 

`commander()` que le console.log(client ) sera executé et donc on retrouvera le résultat dans le terminal


## Importation

En dehors de la lecture d'un seul fichier, lors qu'on importe (on ramène) plusieurs fichiers
par example en javascript on fait appel à un fichier comme ça:

```javascript
//dans le fichier nommé mathematiques.js

function add(a, b) {
  console.log('Calcul a + b')
  return a+b;
}


console.log('import de fichier math');
module.exports = {add: add}

//dans le fichier qui appel / utilise le fichier
const mathematiques = require('mathematiques');

function totalPrix() {

  const prixArticleUn = 10;
  const prixArticleDeux = 40
  const total = mathematiques.add(prixArticleDeux, prixArticleUn);
  console.log('prix total', total);
}

totalPrix();
```



Parcours d'execution par ligne 

- import du fichier mathématiques
  - déclaration / définition de la function add
  - output terminal: "import de fichier math"
  - exportation de la méthode add
- déclaration de la méthode totalPrix
- execution de la méthode totalPrix
  - prixArticleUn = 10;
  - ...
  - execution de mathematiques.add(10, 40);
    - console.log('calcul a+b');
  - console.log(prix total 50)

