
## Rappel: Assignation 

- Assigner veut dire "associer" ou "donner" une **valeur** à une variable
- On utilise le signe `=` pour assigner

```js
let thisIsDeclaredButNotAssigned; //ici on déclare une variable
thisIsDeclaredButNotAssigned = 5; //ici on ASSIGNE una valeur 5 à la variable

const a = 40; //ici on déclare et on assigne au même temps
```

## Assignation + calcul

- Si on veut  **combiner** l'assignation avec un **type de calcul** sur une variable (x) par example pour effectuer une addition, on fera `x += 10` 
- Dans ce cas ce qui se passe c'est: 
	- d'abord on cela va additioner la valeur 10 à la **valeur actuelle de x**  
	- ensuite le résultat va être **assigné** à nouveau (reassigné)

```js
let x = 10
x += 30;
```

- cela revient à écrire

```js
let x = 10
x = x + 30;
```

- en général on utilise le signe du calcul qu'on veut, suivi du signe `=`   `[signe][=]`
	- `+= , -= *= /= ` etc etc

```js
x *= 40;
x -= addition(10, 30); //juste un example pour voir aussi que ça empêche pas de voir une fonction aussi comme valeur à la place du 40
```


## Référence

- toute la liste d'opérators, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators
