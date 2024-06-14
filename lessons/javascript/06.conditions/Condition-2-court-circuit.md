Une condition peut être court circuité, lors que l'évaluation de l'operand de gauche permet de savoir à l'avance le résultat final de toute la condition final

- Ce principe de court circuit s'utilise avec les operators ET et OU
- On peut combiner une valeur "truthy/falsy" pour écrire ce type de code et créer les court-cuits avec une syntaxe plus "légère"

## Example

```js
let a = true;
let b = false;
console.log(a || b); // Affiche: true

```

```js
let a = false;
let b = true;

console.log(a && b); // Affiche: false
```

Pour ces 2 expressions, Javascript n'a même pas vérifié si b étaient vrai ou false, 
car l'évaluation de l'operand de gauche (donc variable a) a court-circuité la condition entière, 
et donc on retourne 
En pratique le court-circuit va nous permettre d'éviter l'utilisation des if dans les cas suivants:

- lors qu'on souhaite donner (instancier) une valeur par défaut lors que la condition ne donne pas vrai
- lors qu'on souhaite exécuter du code / une fonction QUE seulement si la condition est vrai
- lors qu'on souhaite sécuriser la récupération d'une propriété

Autre Example avec &&

```js
function aRetournerSiVrai() {
  console.log('VRAI');
}

condition && aRetournerSiVrai();
```

- si condition = false, que fait ce code
- si condition = true, que fait ce code

## Exercices

1.
```
true || false && false; // ? 
```

## Théorie avancé 

Maintenant que vous avez compris le principe de base, il faut comprendre 2 choses,
enfaite l'opérator || et && ne renvoient pas toujours des boolean, enfaite ce qu'ils renvoie dépend des **operands**, pour l'operator:

- OU ( || )
	- le résultat est le premier operand qui a permis d'avoir un "true"
- ET ( && )
	- le résultat est le premier operand qui a permis d'avoir un "false"


```js
function maybe() {
	console.log('maybe executed')
	return false;
}
const result = " " && maybe();
console.log('result:', result);
```

(si jamais il y a 2 operand, et que le premier n'a pas permis de court-circuité) alors c'est le dernier operand qui va être utilisé comme retour.
## Exercices

## 0. 

```js
let a; // undefined (falsy value)

let b = null; // null (falsy value)

let c = undefined; // undefined (falsy value)

let d = 4; // number (truthy value) => l'intepréteur s'arrête

let e = 'five';

let f = a || b || c || d || e; // a été court-circuité par l'interpréteur
```

### 1.

```js
function p(name) {
  console.log(name || 'default');
}
p();

//pour chacun des elements de la liste que donnerai comme résultat la fonction p si on passe en paramètre un par un les élements de la liste ci dessous
//array de test -> [null, undefined, "token", 2, 0, true, 10 < 20]
```

### 2.

```js
//VERSION 1
const command = undefined;
if (command && command.adress && command.adress.door) {
  //do stuff
}

//VERSION 2
const command = undefined;
if (command.adress.door) {
  console.log('good');
}
```

- Quel est la différence entre la VERSION 1 et la VERSION 2.?, expliquez les comportements, comment l'ordinateur va exécuter/interpréter de code

### 3.

```js
const user = null;
const user2 = {};
const user3 = { username: undefined };

function login(user) {
  console.log('is logged now:', { user });
}

user && login(user); //?
user2 && login(user2); //?
user3 && login(user3); //??
```

### 4.
Veuillez écrire les conditions de l'exercice 1 et 2 avec la syntaxe plus longue (IF statement)
