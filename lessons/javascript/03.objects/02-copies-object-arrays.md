Après avoir abordé le chapitre sur le référence, nous avons vu que pour les object / arrays il peut être dangereux de faire des copies. Dans ce chapitre, on pourra voir les différents types de copies possibles à utiliser selon notre contexte
## 1. Shadow copy

### Object assign

```javascript

const banque = {
  code: "AB123",
  name: "Oney"
}

const copyBanque = Object.assign({}, banque);

```


### Spread Operator

- le spread operator est le suivant:  `...`
- example:

```js
const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = { ...food };

console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }
```

## Exercices


```
1. créer un array countries = ["France", "Espagne", "Italie"]; 
  faire une copie puis rajouter à la COPIE SEULMENT une valeur "Allemagne",
```

```
2. et faire une fonction appelé "copieEtAjouterSuisse" qui prend en paramètre l'array countries (orignale), la fonction va devoir rajouter une valeur "Suisse". il faut que la fonction "copieEtAjouterSuisse" retourne la copie afin d'avoir.

const copie = copieEtAjouterSuisse(...);
console.log(copie) //["France", "Espagne", "Italie", "Suisse"]
```


```
3.  afin de comprendre la différence entre shallow et deep copie, nous allons faire un petit exercice, vous devez créer un copie de l'object suivant:
const original = {
  flag: '🇨🇦',
  country: {
    city: 'vancouver',
  },
};

avec la méthode votre choix, et ensuite modifier (COPIE SEULEMENT) la propriété flag avec la valeur `🇫🇷`  et ensuite la proriété country.city = "france".
- Veuillez faire un console log des 2 objects "original" et "copie" ? Tu peux indique le bug/erreur ? 
```


### Correction

- on a pas encore vu pourquoi on appelle ça "shallow copy"... le fait est que c'est copies ne vont plus être impactés si on change une des deux copies, par contre.. si jamais l'object original `contient à l'intérieur d'autres objects ou un array`, comme ce ci. Ici "original" contient "country" `qui est aussi un objet`
	
```js
const original = {
  flag: '🇨🇦',
  country: {
    city: 'vancouver',
  },
};
```

- et que le clone (copie) modifie la propriété qui contient un objet / ou array (ici customer), alors cela va aussi impacter la copie original...

```js
const shallowClone = { ...original };

// Changed our cloned object
shallowClone.flag = '🇫🇷';
shallowClone.country.city = 'france';

console.log(shallowClone);
// {country: '🇫🇷', {city: 'france'}}
console.log(nestedObject);
// {country: '🇨🇦', {city: 'france'}} <-- 😱
```

>  en résumé, on a seulement copié les valeurs des primitives, mais pour les objects / arrays ont a copié les références dans le clone... c'est pour cela que en modifiant `shallowClone.contry`  on continue a impacter l'original 
   
   > on dit que ce type de copie n'est pas `profonde` ou alors que c'est du "shallow copy"  
## 2. Deep copy

- Comme le shallow copy ne résout pas tout, on besoin de faire des "deep copy"

### JSON.parse + JSON.stringify

- si on reprend notre example de plus haut, on peut voir que cette fois, le country est différent dans le clone et la copie originale
```js
const clone = JSON.parse(JSON.stringify(original));
clone.flag = '🇫🇷';
clone.country.city = 'france';

console.log(deepClone);
// {country: '🇫🇷', {city: 'france'}}

console.log(original);
// {country: '🇨🇦', {city: 'vancouver'}} <-- ✅
```

- la méthode JSON, est tout de même un peu risqué, car elle ne fonctionne bien qu'avec des propriétés primitive / objects mais  pour les valeurs comme functions Symbols et undefined, cela sera remplacé par d'autres valeurs.. 
- aussi JSON gère très mal certains formats d'objects qui sont complexes (ex: recursive)

> Donc en résumé JSON ne peut pas être appliqué à n'importe quel object, il faut en être conscient.

### Lodash
- c'est une librairie très utilisé et connu, qui n'a pas les inconvénients de JSON,
- example -> https://lodash.com/docs/#cloneDeep

```js
const objects = [{ 'a': 1 }, { 'b': 2 }];

const deep = _.cloneDeep(objects);

console.log(deep[0] === objects[0]); // => false
```


## structuredClone()

Il peut être utilisé dans les dernières versions de node (et aussi le navigateur)

```javascript
const objects = [{ 'a': 1 }, { 'b': 2 }];
let copie = structuredClone(objects);
copie[0] === objects[0] // => false
```

## Exercices

```
1. maintenant qu'on connaît des moyens pour faire de copies profondes, veuillez reprendre l'exercice numéro 3 (plus haut) et faire que la copie fonctionne correctement
```

## Références

- https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/
- https://www.freecodecamp.org/news/clone-an-object-in-javascript/