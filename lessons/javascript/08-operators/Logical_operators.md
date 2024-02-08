## Operators logique

Example
- ici on va "combiner" deux condition pour créer condition global pour déduire le nom d'un joueur de foot
- première condition: vérifie que le numéro est égale à 10
- deuxième condition pays  égale à "France"
- pour combiner les deux condition et avoir notre condition global, on rajoutera soit && , soit ||, pour le moment on va choisir && et ensuite on expliquera les difference entre les deux opérators
- le résultat de ces deux condition peut donner soit TRUE soit FALSE
```javascript
si tout ça est VRAI -> (numero === 10 ET pays === "France")
   alors afficher Mbappé
si non (soit condition 1 = false ou la condition 2 = false) {
   alors afficher Jouer non trouvé
}
```

### Description
- Il est souvent utilisé dans les conditions, par example les "if"
- Il sera utilisé pour déterminer une condition global en combinant d'autres conditions
- Utiliser un operator logique va au final permettre (en général) d'avoir un "boolean" comme résultat, c'est à dire soit `true` soit `false`


### ET Logique (&&)

- condition global -> (condition1) ET (condition2)
- l'opérator ET va être utilisé pour déclarer que la condition global a **besoin que les DEUX conditions (1 et 2) (operands) soient  VRAI**  pour que la condition global soit VRAI aussi,
- Dans le cas où une partie des conditions est FAUSSE alors TOUTE la condition global sera fausse

```js
si tout ça est VRAI -> (age > 18 ET pays === "France")
   alors afficher "Majeur"
si non (soit condition 1 = false ou la condition 2 = false) {
   alors afficher "Mineur"
}

```

### OU Logique (||)

- condition global -> (condition1 OU condition2)
- l'opérator OU est utilisé pour déclarer que la condition global sera VRAI SI: une des deux conditions (1 ou 2) est vrai
- Il ne faut pas forcement avoir les deux à vrai, pour que la condition global soit vrai aussi
- si les deux conditions sont fausses (donc aucune a vrai) dans ce cas la condition global est fausse aussi

```js
si une partie de ça est VRAI -> (numero === 10 OU pays === "France")
   alors afficher "Joueur important"
si non (soit condition 1 = false et la condition 2 = false) {
   alors afficher "Jouer pas important"
}
```


### Exercices

```
1. Remplacer par TRUE ou FALSE chaque partie de condition et donner le résultat final

let res = (typeUtilisateur === "admin" || userId === "abc");
res = couleur === "bleu" && couleur === "jaune"
```

```
1. Veuillez écrire les condition des examples des ET et OU audessus, dans le langage JS (donc avec des if)
2. Ecrire la condition: On cherche à savoir si un entier n est compris entre 10 et 20
3. Ecrire la condition: la balance est inférieur à la limite de payment possibles ou que le client à une balance de 0 avec des dettes (liste supérieur à 1) 
```


Correction

```js
if (age > 18 && pays === "France") {
   console.log('Majeur');
} else {
   console.log('Mineur')
}

if (numero === 10 || pays === "France") {
   console.log('Joueur important');
} else {
   console.log('Jouer pas important')
}



## Références

- https://circuitspedia.com/logic-gate-and-gate-or-gate-nor-gate-truth-table/
