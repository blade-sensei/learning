Une condition peut être court circuité, alors que une des condition permet de savoir à l'avance le résultat final de toute la condition final


- Ce principe de court circuit s'utilise avec les operators ET et OU
- On peut combiner une valeur "truthy/falsy" pour écrire ce type de code et créer les court-cuits avec une syntaxe plus "légère"

## Example

```js
let a; // undefined (falsy value)

let b = null; // null (falsy value)

let c = undefined; // undefined (falsy value)

let d = 4; // number (truthy value) => l'intepréteur s'arrête

let e = 'five'; // a été court-circuité par l'interpréteur

let f = a || b || c || d || e;
```

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



Jusqu'à maintenant vous avez utilisé les "&&" et "||" pour les conditions qui donnent comme résultat des "boolean" mais..
Il y a deux choses à savoir, si on utilise ces de type d'expression (court-circuit) dans un "if" ou si on l'utilise en dehors du if

Si on utilise la valeur en dehors d'un if, on va execute du code, ou alors on va récupérer la valeur de l'évaluation (pas forcement un boolean), un example plus bas:
## Exercices

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
