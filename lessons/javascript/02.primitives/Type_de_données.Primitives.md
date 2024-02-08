
- D'abord il faut savoir que les VALEURS des variables en javascript, peuvent être de 2 types, 
	- PRIMITIVES
	- OBJETS
- pour l'instant on va seulement voir une partie de chaque type, car certains type sont moins fréquement utilisés

![[6-types-javascript-objet-primitif.png]]

## Primitives

- Dans les primitives nous avons les 
	- String
	- Number
	- Boolean: qui prend seulement 2 valeur "VRAI" ou "FALSE"

```js
// **strings**

// different forms to create a string
const string1 = 'Une chaîne de caractères primitive';
const string2 = 'Là encore une valeur de chaîne de caractères primitive';
const string3 = 'Et ici aussi';

  

// **number**

const number = 30;
const number2 = 12.4;
const hello = -40;


// ** boolean **
const activated = true;
const shouldPass = false;

```


### Bonus: Null et Undefined
```js
// **null and undefined **
// both types mean this variable HAS NO VALUE but
// reference: https://res.cloudinary.com/practicaldev/image/fetch/s--1MftApyk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/uq73osi7sqq8za8rbaw1.jpg

  

// null means I choose explictly the value "isEmpty"

const test = null;
console.log('this value', test);

  
// undefined means the "value" of this variable doesnt exist yet
let variableWithoutValue;
console.log('this value', variableWithoutValue);

// FYI to know the type of your variable use the "keyword" typeof
const theTypeOfMyVar = typeof number;
console.log(typeof number);
```

## Exercices
```
1. Utiliser bon type de variable primitive selon le besoin de la phrase
- on a besoin de stocker le prénom de la personne
- on a besoin de stocker son taille en centimètres
- on a besoin de stocker une valeur pour savoir si la personne est connecté ou pas
```

## Références

reference https://developer.mozilla.org/fr/docs/Glossary/Primitive