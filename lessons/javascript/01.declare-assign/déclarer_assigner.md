
## Déclaration

- veut dire que on va créer le nom de la variable dans la quel on va "stocker" (ou ranger) une donnée
- Pour déclarer on utilise le mot clé "let" ou "const", ils ont des petites différences qu'on verra un peu plus bas, mais on général le plus utilisé c'est "const"
- il y a aussi "var" mais c'est dans une version de Javascript ancienne, on l'utilise plus, mais on peut encore le voir dans du code javascript ancien

```
let thisIsDeclaredButNotAssigned;
const variableA = 10;
```


## Assignation 

- Assigner veut dire "associer" ou "donner" une **valeur** à une variable
- On utilise le signe `=` pour assigner

```js
let thisIsDeclaredButNotAssigned; //ici on déclare une variable
thisIsDeclaredButNotAssigned = 5; //ici on ASSIGNE una valeur 5 à la variable

const a = 40; //ici on déclare et on assigne au même temps
```

## CONST et LET

- let nous permet de "réassigner", assigner à nouveau (donner à nouveau une valeur, en **utilisant l'opérateur égale** `= `)
- alors que avec const on ne pourra plus "reassigner" avec l'opérateur `= `  
- il est important de bien comprendre que const ne veut pas dire qu'on PEUT PAS CHANGER la variable (on verra plus tard la différence entre changer la valeur et réassigner)
```js
const variableQuiPeutPasEtreReassigne = 10;
variableQuiPeutPasEtreReassigne = 20 // ❌ ERROR

let variableQuiPeutEtreReassigneANouveau = "Hello";
variableQuiPeutEtreReassigneANouveau = "Bonjour"  //✅ ce code fonctionne 
```


### Example 
- exécuter ce code
```js
const thisVariableIsDefinedButNotAssigned;

// this will generate an error https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_initializer_in_const
```

- Si on utilise le mot const, il est OBLIGATOIRE d'assigner à la variable une valeur dès le début, c'est logique, puisque après elle ne pourra plus être reassigne, donc la variable sans valeur ne servirai pas à grand chose, c'est pour cela que c'est une erreur

## Exercices

```
1. déclarer seulement une variable avec le nom "maVariable" (sans valeur)
2. déclarer une variable "articles" avec la valeur 10
3. réassigner la variable articles pour lui donner une valeur 30;
4. question ?: Si on a besoin de réassigner plus tard une valeur à une variable, faut-il choisir LET ou CONST ? 🤔
```

