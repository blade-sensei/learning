
|Opérateur|Description|Exemples qui renvoient `true`|
|---|---|---|
|[Égalité](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Equality) (`==`)|Renvoie `true` si les opérandes sont égaux (après conversion implicite).|`3 == var1`  <br>`"3" == var1`  <br>`3 == '3'`|
|[Inégalité](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Inequality) (`!=`)|Renvoie `true` si les opérandes sont différents (après conversion implicite).|`var1 != 4`  <br>`var2 != "3"`|
|[Égalité stricte](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`)|Renvoie `true` si les opérandes sont égaux et du même type. Voir également [`Object.is()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/is) et [l'égalité en JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness).|`3 === var1`|
|[Inégalité stricte](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality) (`!==`)|Renvoie `true` si les opérandes sont du même type et différents ou s'ils ne sont pas du même type.|`var1 !== "3"`  <br>`3 !== '3'`|
|[Supériorité stricte](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Greater_than) (`>`)|Renvoie `true` si l'opérande gauche est strictement supérieur à l'opérande droit.|`var2 > var1`  <br>`"12" > 2`|
|[Supériorité](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) (`>=`)|Renvoie `true` si l'opérande gauche est supérieur ou égal à l'opérande droit.|`var2 >= var1`  <br>`var1 >= 3`|
|[Infériorité stricte](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Less_than) (`<`)|Renvoie `true` si l'opérande gauche est strictement inférieur à l'opérande droit.|`var1 < var2`  <br>`"2" < 12`|
|[Infériorité](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal) (`<=`)|Renvoie `true` si l'opérande gauche est inférieur ou égal à l'opérande droit.|`var1 <= var2`  <br>`var2 <= 5`|
- dans l'égalité simple `==` on voit que si on fait 3 == '3' cela donne "true", mais c'est une spécificité du langage javascript, parfois c'est un peu dangereux, car on voit bien que on parle du type number 3 et l'autre c'est une string "3", qui ne sont pas tout à fait pareil, donc en général on verra plus des condition avec l'égalité stricte `===`
- on peut se passer de l'operator "inégalité" si on utilise correctement le "else" d'une condition if

```js
if (menu !== "sushi") {
   console.log('Ne pas commander')
} else {
   console.log('👍')
}

//peut aussi s'écrire "SANS ingégalité "

if (menu === "sushi") {
   console.log('👍')
} else {
   console.log('Ne pas commander')
}
```

- Pour rappeler l'ordre d'évaluation des conditions est faite de "gauche" à "droite", donc pour le code suivant `numero >= 30`  il faut lire `numero SUPERIEUR OU EGAL à 30` 

## Exercices

```js
1. Donnez les résultat de `result, pokemonFort et passeEnCaissePrio`   selon les résultats des comparaisons

const typeUtilisateur = "client";
const result = (typeUtilisateur === "admin")

const pokemon = "Salameche";
const pokemonFort =  pokemon != "Bulbizarre"

const list = ["5"];
const passeEnCaissePrio = list.length <= 5
```

```js
Ecrire les conditions suivantes en JS:
1. On veut déterminer si la personne est majeur (par rapport à son âge legal en france)
2. On veut déterminer que l'état civil d'une personne n'est pas "marié" si la condition est bonne alors il faut afficher "Personne autorisé"
3. Si une personne a une liste d'articles (array), on veut déterminer si elle possède moins de dix articles, si c'est le cas alors afficher le message "Passer à la caisse express"
4. On veut déterminer que le pays est différent de "France" si la condition est bonne alors affiche "Hello !" si non afficher "Bonjour"
5. Veuillez écrire autrement la condition de l'étape 3. Pour avoir le même résultat
```

## Correction

```js
result -> false
pokemonFort -> true
passeEnCaissePrio -> true
```

```js
1. const personne = (age >= 18)
2. if (etatCivil != marié) { console.log('Personne autorisée') }
3. if(array.lenght <= 10) { console.log('Passer à la caisse express')}
4. if(pays != France) { console.log('hello)} else {'Bonjour'}

5. if(array.lenght < 11) { console.log('Passer à la caisse express')}
```