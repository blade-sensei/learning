
L'idée général de ce chapitre est de voir un peu de vocabulaire, ce qui va aider à encore approfondir la compréhension du code mais aussi:

* d'avoir du vocabulaire pour communiquer avec d'autres devs  et lire de la documentation de libs
* afin de changer ou remplacer(refactorer)
* pour éviter des erreurs de syntaxe / et les comprendre
## Expression

- une expression est un bout de code qui peut être utilisé comme une valeur
- les appels de fonctions (calls) vont être évalués comme des valeurs

```js
[1, 2].find(); -> va donner lieu à une valeur soit un nombre 1 ou 2 soit undefined
x < 4 -> va donner lieu à une valeur, soit true soit false
i + 1 -> va retourner une valeur en incrémentant i + 1, par example 2
```

## Statement (ou déclaration en français)

- c'est un bout de code qui va permettre d'executer du code
- effectuer une tâche 
- typiquement si on a un ";" à la fin du code écrit, alors c'est "en général" (pas tout le temps) un statement
- en général: les Statements sont composés d'expressions (ou alors d'autres statements)
- il existe plusieurs type de statement: For statement, If Statements, Switch etc.. 

Examples:
- ici on remarque que le for statement est composé d'expressions, let i = 0 est considéré comme une  expression; i<10 sera remplacé par soit true ou false, i++ un nombre. et la partie "{}" est un statement qui lui peut contenir d'autres statements ou expressions.
```javascript

//tout le bloque entre {} est considéré comme une suite de statements

for (let i = 0; i<10; i++) {
  const user = list[i];
  const relatedOperation = operations.getBy(user);
  const allOperation = ...
}
return //is a statement

```

## Expression-Statement

- Pour information certains bout de codes peuvent être les deux à la fois et interprétées de différentes façon selon le contexte ou le langage
- Par example les appels de fonction ou les initialisation de variables
- i++ est considéré comme les deux, car à la fois on assigne une nouvelle valeur à i mais aussi on retourne une valeur.


## Exercices

`1. Décrire chaque ligne commenté, et choisir entre statement, expression ou expression-statement`
```javascript
// ?
let n = 0;

// ?
while (n < 3 //?) {
  n++; //?
}

```

`2. Donner pour chaque ligne le type "statement ou expression"`

```javascript
- (a > 0) -> 
- return 0; -> 
- for (..) {} -> 
- if (...) {} -> 
- [1,3,4][0] -> 
```
## Références

- https://stackoverflow.com/questions/4728073/what-is-the-difference-between-an-expression-and-a-statement-in-python

- statements: https://en.wikipedia.org/wiki/Statement_(computer_science)
- `However, like other expressions, assignment expressions like `x = f()` evaluate into a result value. Although this result value is usually not used, it can then be used by another expression.
- expression-statement assignation -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#evaluation_and_nesting
