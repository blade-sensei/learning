## C'est quoi

On dit qu'une valeur est "truthy" ou "falsy" lors que cette valeur (primive ou non), peut être évalué / représenté comme une valeur de type de "boolean" (true ou false) 

L'interêt 🔑 de cette fonctionnalité du langage, est qu'on peut **simplifier les conditions**, 
là où on a besoin d'une évaluation d'un type boolean, on peut le **remplacer** par une valeur de type "truthy/falsy"
Par example cela est utile lors qu'on veut gérer l'absence de valeur d'une variable.

## Example 
Prenons l'example d'une variable x, si on veut gérer l'absence de valeur afin d'afficher un message d'erreur on dirait à JS ceci: 
- "si la valeur de x est égale à undefined OU alors cette valeur est null" alors tu peux envoyer un message d'erreur
mais en utilisant un condition avec évaluation de falsy, alors on peut raccourci la phrase à ça
- si x absent alors tu affiche un message d'erreur..

JS pourra "traduire/interpreter" la phrase "x absent" pour créer un résultat boolean "false" ou "true".

### Liste des valeurs TRUTHY

```
true -> reste un true
1 -> devient un true
" " ou alors "je ne suis pas vide" -> en gros toute chaîne de char qui n est pas vide.
[] -> une array même s il est vide
{} -> un objet même s il est vide

function() -> une fonction sera aussi considéré comme truthy if (objet.fn) -> true 🚨

```

### Liste des valeurs FALSY

```
false
0 ou -0
"" (string vide)
undefined
null
```

## Cas d'utilisations

Lors qu'on veut tester si une propriété existe ou pas, alors pour tester ça il nous suffit d'écrire

```js
if (second.name) {
  console.log('ça existe');
}
```

- comme on peut le voir, écrire second.name suffit puis que il sera évalué comme true ou false et donc on peut l'utilise en tant que condition
- par contre attention, car si name égale à "" alors la condition passera pas, puisque "" est considéré comme un "false"

- Pourquoi dans cet example on tombe dans le "else" ?

```js
const list = [];
const isFilled = list.length;

if (isFilled) {
  console.log('print list', list);
} else {
  console.log('condition is 0 so, false -> array empty');
}
```

## Exercices

1. veuillez transformer le code suivants, en utilisant des condition truthy et falsy

```js
const pets = [];
if (pets.length > 0) {
  return 'You have at least one pet!';
}
```

```js
//donner également les valeur truthy d'un string ?
//les / ou la valeur falsy d'un string ?
if (titre !== undefined && titre !== '') {
  console.log('is not empty');
}
```

2. écrire les conditions en texte vers du code (en utilisant une condition qui supporterai des truthy / false)

```bash
- étant donnée une variable commande de type objet, je souhaite savoir si une commande est présente ? afin de lancer la préparation si non affiche un message d'attente.

- étant donnée une variable "décompte", je souhaite afficher un message "cours en cours" si il y a encore du temps (dans le décompte), si jamais on arrive à zéro on affiche un message de "fin"
```

1. Ce code n'est pas tout à fait fonctionnelle, il y a un bug 🤔 
- Veuillez indiquer le bug, et l'expliquer
- Proposez un fix

```js
const car = {
  color: 'red',

  changeColor(color) {
    this.color = color;
  },

  isRed() {
    if (this.color === 'red') {
      return true;
    }

    return false;
  },
};

if (car.isRed) {
  console.log('this is red');
} else {
  console.log('this is blue');
}

car.changeColor('blue');

if (car.isRed) {
  console.log('this is red');
} else {
  console.log('this is blue');
}
```
