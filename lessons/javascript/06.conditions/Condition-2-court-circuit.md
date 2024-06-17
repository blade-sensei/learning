Une condition peut être court circuité, lors que l'évaluation de l'operand de gauche permet de savoir à l'avance le résultat final de toute la condition final

- Ce principe de court circuit s'utilise avec les operators ET et OU
- On peut combiner une valeur "truthy/falsy" pour écrire ce type de code et créer les court-cuits avec une syntaxe plus "légère"
- Pour rappel l'ordre d'évaluation se fait de gauche à droite.

## Example

```js
let a = true;
let b = false;
console.log(a || b);
```

```js
let a = false;
let b = true;

console.log(a && b);
```

Pour ces 2 expressions, Javascript n'a même pas vérifié si b était vrai ou false,
car l'évaluation de l'operand de gauche (donc variable a) a court-circuité la condition entière, le résultat de l'évaluation de a, a permis de connaître le résultat de l'expression entière. JS ne va pas essayer de vérifier la valeur de b.

- a = true, donc `a || b` on sait d'avance que si il y a au moins un TRUE dans un operator OU alors toute la condition donnera TRUE.
- a = false, doc `a && b` on sait d'avance que il nous faut TRUE et TRUE pour avoir true, au moindre "FALSE", on sait déjà que l'operator && donnera comme résultat FALSE.

## Pourquoi on l'utilise

En pratique le court-circuit va nous permettre d'éviter l'utilisation des if dans les cas suivants:

- lors qu'on souhaite donner, **instancier une valeur par défaut** lors que la condition ne donne pas vrai
- lors qu'on souhaite **exécuter du code** / une fonction QUE seulement si la condition est vrai
- lors qu'on souhaite **sécuriser** la récupération d'une propriété

Autre Example avec &&

```js
function aRetournerSiVrai() {
  console.log('this function is evaluated');
  return 'username';
}

const result = condition && aRetournerSiVrai();
```

- si condition = false, que vaut result ?
- si condition = true, que vaut result ?

## Exercices

1. Precedence

```
true || false && false; // ?
```

- étant donné que && est plus fort en precedence, code code est **intérprété** comme ce-ci par JS, `true || (false && false)`
- on évalue de gauche à droite
- true est évalué
- true suffit à savoir le résultat final, donc on n'évalue pas le reste (`(false && false`)
- resultat de retour -> TRUE

un example pour prouver que "false && false" ne sont pas éxecutés

```js
function vrai() {
  console.log('vrai');
  return true;
}

function faux() {
  console.log('false');
  return false;
}

const t = vrai() || (faux() && faux());

console.log(t);
```

## Théorie avancé

Maintenant que vous avez compris le principe de base avec des boolean, il faut comprendre 2 choses,
enfaite l'opérator || et && ne renvoient pas toujours des boolean, ce qu'ils renvoient dépend des **operands**, pour l'operator:

- OU ( || )
  - le résultat est le premier operand qui a permis d'avoir un "true", le cas contraire il retournera le résultat du dernier operand
- ET ( && )
  - le résultat est le premier operand qui a permis d'avoir un "false", le cas contraire il retournera le résultat du dernier operand

```js
function maybe() {
  console.log('maybe executed');
  return false;
}
const result = ' ' && maybe();
console.log('result:', result);
```

(si jamais il y a 2 operand, et que le premier n'a pas permis de court-circuité) alors c'est le dernier operand qui va être utilisé comme retour.

## Exercices

### 0. falsy / truthy

```js
let a; // undefined (falsy value)

let b = null; // null (falsy value)

let c = undefined; // undefined (falsy value)

let d = ""; 

let e = 'five';

let f = a || b || c || d || e; //  que donne F ? 
```

### 1. défaut

```js
function p(name) {
  console.log(name || 'default');
}

[null, undefined, "token", 2, 0, true, 10 < 20].forEach(p)

//pour chacun des elements de la liste que donnerai comme résultat la fonction p si on passe en paramètre un par un les élements de la liste ci dessous
//array de test -> [null, undefined, "token", 2, 0, true, 10 < 20]

//donnez les résultats affichés dans la console
```

### 2. sécurité

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

### 3. execution function

```js
const user = null;
const user2 = {};
const user3 = { username: undefined };

function login(user) {
  return 'logged';
}

const r = user && login(); //?
const r = user2 && login(); //?
const r = user3 && login(); //??
```

### 4.

Veuillez écrire les conditions de l'exercice 2 avec la syntaxe plus longue (IF statement)
