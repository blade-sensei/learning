Une condition peut être court circuité, alors que une des condition permet de savoir à l'avance le résultat final de toute la condition final
Par example si notre condition est "Acheter burger" OU "Acheter un sandwich" si jamais "Acheter  burger" a été réalisé, alors on a pas besoin de "verifier que "Acheter un sandwich" passe ou non. DONC on a fait un cout circuit. On a arrêté les vérifications sans aller au bout, car 1 seul condition a permis d'avoir le résultat final de la condition.

- Ce principe de court circuit s'utilise avec les operators ET et OU
- On peut combiner une valeur "truthy/falsy" pour écrire ce type de code et créer les court-cuits

## Example

```js
let a // undefined (falsy value)

let b = null // null (falsy value)

let c = undefined // undefined (falsy value)

let d = 4 // number (truthy value) => l'intepréteur s'arrête

let e = "five" // a été court-circuité par l'interpréteur

let f = a || b || c || d || e
```

On pratique le court-circuit va nous permettre d'éviter l'utilisation des if dans les cas suivants: 
- lors qu'on souhaite donner (instancier) une valeur par défaut lors que la condition ne donne pas vrai
- lors qu'on souhaite exécuter du code / une fonction QUE seulement si la condition est vrai
- lors qu'on souhaite sécuriser la récupération d'une propriété

Autre Example avec &&

```js
function aRetournerSiVrai() {
  console.log('VRAI');
}


condition && aRetournerSiVrai()
```

- si condition = false, que fait ce code
- si condition = true, que fait ce code

## Exercices

```js

function p(name) { console.log(name || "default"); }
p();
// => "default" p(null);
// => "default" p(undefined);
// => "default" p("");
// => "default" p(false); // => "default" p(0); // => "default"

```