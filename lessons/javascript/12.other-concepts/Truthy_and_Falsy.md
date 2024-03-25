## C'est quoi

On dit qu'une valeur est "truthy" ou "falsy" lors que cette valeur (primive ou non), peut être évalué / représenté comme une valeur de type de "boolean" (true ou false)

Example des valeurs qui vont être considérés comme "true" / "truthy"

### Les TRUTHY

```
true -> reste un true
1 -> devient un true
" " ou alors "je ne suis pas vide" -> en gros toute chaîne de char qui n est pas vide.
[] -> une array même s il est vide
{} -> un objet même s il est vide

function() -> une fonction sera aussi considéré comme truthy if (objet.fn) -> true 🚨

```

### Les FALSY

```
false
0 ou -0
""
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
const titre = '';
if (titre !== undefined && titre !== '') {
  console.log('is not empty');
}
```

2. Où est l'erreur 🤔 
- Veuillez indiquer l'erreur, et l'expliquer
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
