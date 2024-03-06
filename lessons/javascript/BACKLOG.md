

```
🔵 en cours de prépation
🟠 préparé
🟢 présenté
```

DEV Niveau 0 Base
- comment déclarer une variable pour stocker une donnée
- types de variables
  - 3 types de base (primitives)
  - object pour stocker un ensemble 
- structure et utilisation d'une fonction
  - paramètres
  - définition et appel

DEV Niveau 1

- c'est quoi la déclaration et l'assignation 🟢 [lessons/javascript/01.declare-assign/déclarer_assigner.md](../../lessons/javascript/01.declare-assign/déclarer_assigner.md)
- comment déclarer une variable (avec const et let) [lessons/javascript/01.declare-assign/déclarer_assigner.md](../../lessons/javascript/01.declare-assign/déclarer_assigner.md#const-et-let)
- savoir les types de variables 🟢
  - primitives 🟢 [lessons/javascript/02.primitives/Type_de_données.Primitives.md](../../lessons/javascript/02.primitives/Type_de_données.Primitives.md#primitives)
  - objects 🟢
- Objects 🟢 [lessons/javascript/03.objects/01-objects.js](../javascript/03.objects/01-objects.js)
  - Récupérer des données, rajouter des données 🟢
- savoir voir les correspondance quand on copie une données / comment la valeur est copié / traversé 🟢
- savoir le parcours d'une app 🟢 [lessons/code/how-to-understand-code.md/lecture-interpretion](../../lessons/code/how-to-understand-code.md#lecture--interpréation)
  - lecture 🟢
  - execution 🟢
  - importation ordre 🟢 [lessons/code/how-to-understand-code.md/importation](../../lessons/code/how-to-understand-code.md)
- définition vs call 🟢 [functions](../javascript/05.functions/01-Functions.md)
- arrays: 🟢 [lessons/javascript/04.arrays/01-arrays.js](../javascript/04.arrays/01-arrays.js)
  - array dans array 🟢
- function 🟢
  - stockage d'une fonction dans variables / objects 🟢
  - function anonyme 🟢 [lessons/javascript/05.functions/05.Functions-anonym.md](../javascript/05.functions/05.Functions-anonym.md)
  - des callbacks 🟢 [lessons/javascript/05.functions/02.Functions-callback.md](../javascript/05.functions/02.Functions-callback.md)
    - syncrone + example 🟢 (faire une lib qui donne par le retour de la func)
    - callback hell 🟢 [lessons/javascript/05.functions/05.Functions-anonym.md](../javascript/05.functions/05.Functions-anonym.md#callback-hell-ou-pyramid-of-doom)
- Game

DEV Niveau 2

- Expression statement 🟠 [lessons/javascript/11.expression-statement/01-Expression-And-Statement.md](../javascript/11.expression-statement/01-Expression-And-Statement.md)
- operators 🟠
	- comparaison 🟠 [lessons/javascript/08-operators/Operators_de_comparaison.md](lessons/javascript/08-operators/Operators_de_comparaison.md)
	  - logique 🟠 [lessons/javascript/08-operators/Logical_operators.md](lessons/javascript/08-operators/Logical_operators.md)
		  - précédence des operators 🟠
	- arithmetique 🟠  [lessons/javascript/08-operators/Operators_arithmetique.md](../../lessons/javascript/08-operators/Operators_arithmetique.md)
    - increment ++ -- %  ** (exponentielle) 🟠 [increments](../../lessons/javascript/08-operators/Operators_arithmetique.md#increment-et-decrement-operator)
    - unary (-) (inverser valeur) 🟠  [unaire negation](../../lessons/javascript/08-operators/Operators_arithmetique.md#négation-unaire)
    - assignation 🟠 
	    - += -= 🟠  [unaire negation](../../lessons/javascript/08-operators/Operators_assigment#assignation--calcul)
  - operator this 🔵
    - avec les fonction pour créer des objets 
    - comment changer le this vers un autre objet (avec call)
- Falsy + Truthy
- functions 2 🔵
  - comment utiliser les fonctions pour faire de l'orienté object 🔵
  - arrow function pourquoi ? (operator this)
- objects 2 | array 2🟠
  - attention avec les références 🟠 [lessons/javascript/03.objects/02-objects-references.md](../javascript/03.objects/02-objects-references.md)
    - example de passage en param de function qui n'est pas "pure" 🟠  [lessons/javascript/03.objects/02-objects-references.md](../javascript/03.objects/02-objects-references.md/#passage-en-paramètre-fonction)
  - realiser des copies d objects/arrays 🟠 [lessons/javascript/03.objects/02-copies-object-arrays.md](../javascript/03.objects/02-copies-object-arrays.md)
    - shallow copy et deep copy  [lessons/javascript/03.objects/02-copies-object-arrays.md](../javascript/03.objects/02-copies-object-arrays.md/#1-shadow-copy)
- scopes 🔵
  - global 🔵
  - local 🔵
  - Let | Cost | Var (pour prouver que ces keyword sont scopes)
- Modules
  - export | import avec module.exports 
- Les classes
  - POO 
    - pourquoi méthodes publique
    - privé
    - static
- Git 2
  - le staging
  - git vs git origin
  - git stash
  - git rebase / pull rebase
  - git merge vs rebase
  - git cherry pick
  - git log / reset HEARD - SOFT
  - vscode pluging : Git Graph
- Faire une app jeux

DEV Niveau 3
- JS
  - Falsy + Truthy
  - conditions 2 🔵 
    - court circuit 🔵
  - Operators 3
    - logique
      - Negation (!) pour eviter les status === false
    - arithmetique 🔵
      - Unary (unaire plus) '+' 🔵 (pour transformer un number)
  - functions 2 🔵
    - Comment utiliser les conditions simplifier une fonction 🔵
  - relational operator (in, instanceof, typeof)
  - ternary operator (comment raccourci un else if pour assigner une valeur)
  - hoisting
- NPM
  - yarn / pnpm 
  - package json
- nodeJS
  - pourquoi ?
  - API?
    - what is HTTP
    - API REST
    - Premier application API
    - Routes
    - Request -> Response
      - Http Status
    - Query \ Params
- L'asyncroyne 🔵
  - promises 🔵
  - await / async 🔵
  - Comment faire de l'ecriture/lecture fichiers 🔵
    - transformer JS. JSON 🔵
  
--- FIN de Niveau 3 partie (on fera un API basique) et en partie 2 une API avec clean architecture
- ES6
- eslint / prettier
- Clean architecture
  - Façade pattern
- Backend APP


JavaScript Niveau 4
- Typescript
  - Typing
  - Runner TS
    - c'est quoi transpilation
    - comment compiler 1 seul fichier
  - le TSconfig
    - régles utiles
    - ts avancé
  - les class
    - Class / private
    - Interfaces
    - Type union vs Enum
    - POO 2
    - extension / abstraction
- POO
  - Polymorphisme
- Backend App V2

JavaScript Niveau 5

- Solid
  - Depedency injection
  - Inversify
- Testing
  - Unit test
  - Integration test
  - e2e test
  - mocking
  - mirror test
- Jest
  - configs
  - run / watch
  - teardown
- Nockback / http calls
- TDD
  - how to discover
  - how to use tdd on legacy
  - tdd to refactoring
  - tdd patterns
  - hats
- Backend App V2 (on legacy)
- Backend App 2 (from scratch)


Niveau ++ (Bonus)

- conditions ++ 🔵 
  - court circuit 🔵
  - inverser un opérator logique - Loi de morgan 🔵
- functions
  - apply call bind pour le framework (demande à Franck)