Une condition peut être court circuité, alors que une des condition permet de savoir à l'avance le résultat final de toute la condition final
Par example si notre condition est "Acheter burger" OU "Acheter un sandwich" si jamais "Acheter burger" a été réalisé, alors on a pas besoin de "verifier que "Acheter un sandwich" passe ou non. DONC on a fait un cout circuit. On a arrêté les vérifications sans aller au bout, car 1 seul condition a permis d'avoir le résultat final de la condition.

- Ce principe de court circuit s'utilise avec les operators ET et OU
- On peut combiner une valeur "truthy/falsy" pour écrire ce type de code et créer les court-cuits

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
