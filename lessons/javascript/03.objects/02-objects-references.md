
- Ce chapitre, va vous donner des informations supplémentaire sur le fonctionnement des type objets
- Afin d'éviter des erreurs / bugs (qui vont arriver très tôt dans votre apprentissage), il est important de comprendre les notions de "références"

## Copies / Changements

Afin d'expliquer par la suite, vous allons analyser tout d'abord quelques scénarios de code qui vont amener des questions sur le fonctionnement des objects

```javascript
const personne = {name: "Patrick"}
let personneCopie = personne;

personneCopie.name = "Is not Patrick anymore";

console.log(personne); //{ name: 'Is not Patrick anymore' }
console.log(personneCopie); //{ name: 'Is not Patrick anymore' }
```
- comme on peut le voir, à la 3eme ligne, même le changement du "name" a été fait uniquement sur personneCopie, cela a tout de même changé la variable personne, car le console.log(personne) nous donne aussi `{ name: 'Is not Patrick anymore' }` 


Pour expliquer pourquoi la variable personne a changé 🤔:
- lors qu'ont crée un object et on l'assigner à une variable, la variable ne possède pas les valeurs de chaque propriété, enfaite la variable va contenir, une "référence", c'est à dire un "code" qui va lui permettre d'accéder **au lieu où sont stockés** les valeurs/propriétés de objects
- 🗃️ C'est un peu comme si "personne" avait plutôt le numéro d'un "casier" le casier numéro "100ER", avec ce numéro on peut aller dans la salle des casiers et ouvrir le casier numéro "100ER" et voir le contenue de "personne"
- Donc lors qu'on fait `let personneCopie = personne`  comme info ne fait que contenir le numero de casier, alors ce même numéro de casier va être copié à la variable `personneCopie`
- ℹ️ on dit que info et info1 "pointent" vers la même référence, maintenant chaque changement dans 1 des 2 objets va changer aussi l'autre object.


![[Pasted image 20240125160113.png]]


![[Pasted image 20240125151824.png]]



## Comparaison

On va prendre un autre scénario, pour voir ce qui se passe quand on compare 2 string d'abord et ensuite 2 objects

```javascript
const text = "Hello";
const textCopie = "Hello";
if (text === textCopie) {
  console.log('String Test ✅');
}


const object1 = {name: "Marie"};
const object2 = {name: "Marie"};
if (object1 === object2 ) {
  console.log('Ojbect Test pass');
} else {
  console.log('Object Test ❌, equalitee false')
}
```

- Résultat de ce code
```
String Test ✅
Object Test ❌, equalitee false
```

- la comparaison de deux variables string, fonctionne
- lors qu'on va comparaison deux objets par contre, JS ne va pas/peut pas comparer chaque propriété des objets et voir s'il à la fin il sont identiques, ce que JS va faire c'est comparer les références, ici if (object === object2) va donner "false" d'où le texte  `'Object Test ❌, equalitee false'`

2 objects qui ont les mêmes propriétés sont pas "exactement" les mêmes 
- la variable a et b ont des "références" différentes et donc on ne peut dire qu'elles ont les mêmes valeurs


![[Pasted image 20240125151625.png]]

## Passage en paramètre fonction

Lors qu'on passe en paramètre un object à une fonction, il faut aussi faire attention, car le même principe de "copie par référence" va être appliqué, 
cela veut dire qui l'object qui sera manipulé et potentiellement modifié à l'intérieur de la fonction, va aussi changer l'object qui est en dehors de la fonction

```javascript
const commande = {
 code: 'A53',
 menu: 'kebab',
 prix: 10
}

function livrer(commande) {
 commande.status = 'LIVRAISON_EN°COURS'
 console.log(`status de livraison: ${commande.code}: ${commande.status}`)
}

livrer(commande);
console.log('object a changé', commande); //😱
```

## Exercices 

- veuillez indiquer les résultat des console logs.

```js
const pierre = {
 tel: "012434523",
 addresse: {
   rue: "Parmentier",
   numero: 12
 },
 prenom: "Pierre",
}

pierre.addresse.ville = "Saint Denis";
const copineDePierre = pierre;
copineDePierre.prenom = "Margot";
copineDePierre.tel = "062341254";
copineDePierre.addresse.ville = "Paris"

console.log(pierre.addresse.ville);
console.log(copineDePierre.addresse.ville);
console.log(pierre.tel);
console.log(copineDePierre.tel);
```
- que donnera `if (pierre === copineDePierre)` ? TRUE ou FALSE ?
- maintenant si on rajoute ce code ? quel sera le résultat des 3 console logs
```js
function rupture(pierre) {
 pierre.addresse = {
  rue: "Ailleurs",
  numero: 0,
  ville: "Loin"
 }
 return pierre;
}
const newPierre = rupture(pierre);
console.log('ancien pierre', pierre.addresse);
console.log('new pierre seul two', newPierre.addresse);
console.log('ex copine', copineDePierre.addresse);
```
- 

Références

- tout sur les objets: https://javascript.info/object
- schéma références: https://www.geeksforgeeks.org/primitive-and-reference-value-in-javascript/
- 