- Ces opérators sont utilisé pour faire des opérations mathématiques
- Les mêmes symboles / signes qu'en mathématiques peuvent être utilisés: 
	- `+`
	- `-`
	- `*` (multiplication) 
	- `/` (division)

## Examples
```js
let resultat = 3 + 3; //6
resultat = 2 * 8 //16
resultat = 10 / 3 // 3.3333333333333335
```


## Opérators  avancés

- Il existe certains opérateurs qu'on utilise moins souvent, mais il est important de les connaître tout de même


|Operator|Description|Example|
|---|---|---|
|[Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) (`%`)|Retourne le "reste" de la division |12 % 5 returns 2.|
|[Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) (`++`)|Unary operator. Adds one to its operand. If used as a prefix operator (`++x`), returns the value of its operand after adding one; if used as a postfix operator (`x++`), returns the value of its operand before adding one.|If `x` is 3, then `++x` sets `x` to 4 and returns 4, whereas `x++` returns 3 and, only then, sets `x` to 4.|
|[Decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement) (`--`)|Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.|If `x` is 3, then `--x` sets `x` to 2 and returns 2, whereas `x--` returns 3 and, only then, sets `x` to 2.|
|[Unary negation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation) (`-`)|Unary operator. Returns the negation of its operand.|If `x` is 3, then `-x` returns -3.|
|[Unary plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) (`+`)|Unary operator. Attempts to [convert the operand to a number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), if it is not already.|`+"3"` returns `3`.<br><br>`+true` returns `1`.|
|[Exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) (`**`)|Correspond à une opération d'expontielle classique comme  `base^exponent. Si on écrit 2 ** 3, ça équivaut à 2^3 |`2 ** 3` returns `8`.  <br>`10 ** -1` returns `0.1`.|

### Increment et decrement operator

- le symbole c'est: `++`  sert à additioner 1 à la valeur de l'opérand et le `--` sert à soustraire 1.
- il y a 2 façon d'utiliser l'operator d'increméntation
	- AVANT l'opérand 
	- APRES l'opérand

```js
++a;
a++;  

--a
a--
```

### Exercice

Que affiche la console  ? 
```js
let compteur = 10;
let decrement = 5;
compteur++
decrement--;
console.log(compteur);
console.log(decrement)

++compteur
--decrement
console.log(compteur);
console.log(decrement)
```

- pour les examples suivants on utilisera seulement l'addition, mais le principe s'applique aussi pour la soustraction, l'important c'est de comprendre le mécanisme
AVANT l'opérand
```
la nouvelle valeur de a sera a+1, donc si a=3, si on fait  `++a` alors vaudra 4 désormais mais parcontre `++a` va aussi  RETOURNER (comme une fonction) la nouvelle valeur de a, par example
```

APRES l'opérand
```
à la différence de l'opérator (AVANT), a va aussi changer la valeur ou additionner 1, parcontre `a++` va RETOURNER (comme un fonction) 🚨🚨 l'ancienne valeur 🚨🚨,
```

- donc il faut faire attention si on utilise le a++ et ou ++a  dans un console log ou alors dans une assignation, car la variable qu'on veut assigner, n'aura pas le même résultat avec `a++`  et `++a` 

- Exécuter et répondre: que affichent les consoles logs ? 
```js
let apres = 50;
const d = apres++;
console.log(d);


let avant = 33;
const e = ++avant;
console.log(e);

```
### Exercice

- Donner la bonne réponse
```js
1. le résultat dans la console sera: 10 OU 11  ? 
let a = 10;
console.log(a++)

2. le résultat dans la console sera: 24, 26, 23  ? 
let b = 23;
console.log(++b)
```

```js
1. Quel est le résultat dans le terminal/console

let a = 10;
console.log(a++);
console.log(a);
```

- Ce type d'opérateur on le retrouve dans les boucles for par example, `for(let i = 0.... i++)`


##  Négation unaire

- permet d'inverser le signe d'une valeur numérique par example 

```js
const a = 10;
const inverse = -a;

//maintenant inverse vaut -10 (moins dix)
//si le chiffre à inverse est déjà un negatif comme b, alors utilise la négation unaire va donner un positif
const b = -50;
const bInverse = -b;

console.log(bInverse);
```


## Exercices
- Que vaut a, b, c
```javascript
const a = 1 + (-(-23));
const b = -(40) -(+24);
const c = -(a) + -(-b);
```



