## 1.  Vocabulaire

En utilisant les mots 

- variable
- déclare
- assigne / re assigne
- définit
- appel (call)
- fonction
- paramètre(s)
- propriétés
- object, boolean, number, string

Compléter

```javascript
let a = "test"
const b;
a = "code"

const client;
const client = {
  id: "c12",
  tel: "0637082142",
  commande: function() {
    console.log('je vais commande...')
  }
};


function hello(client) {
  console.log('bonjour client:', client);
}

hello();
```


- on [déclare] une variable "a" et on [assigne] une valeur "test".
- on [déclare] une variable "b".
- on [re-assigne] la valeur "code" à la variable "a"
- on [déclare] une variable "client"
- le type de variable "client" est un: [objet]
- l'object client possède 3 [propriétés] , avec la première comme type: [string]
- client.commande est de type [function]
- on [définit] la fonction "hello" qui a un [paramètre] un client
- si on [appelle] , la fonction hello va être exécutée

## 2.  Types de données

- donner les deux groupe de "type de variables"
	- [primitives]
	- [objects]
		- donner au moins 3 types de variable pour ce groupe
		- [boolean, number, string]

## 3. Copies

```javascript
let a = 10;
const b = 20;
const x = a;
const z = x + 30 + b;
a = 50;
const s = x + a;
const r = s + z;
```
Si ce code est exécuté alors donner les valeurs de:
- b = 20
- x = 10
- z = 60
- s = 60
- r = 120
- a = 50
## 4. Où est l'erreur

```javascript
const list = [0,2,3,4,5]
for (let i = 0; i <= list.length; i++) {
  if (list[i] === 2) {
     console.log("c'est mon numéro préféré")
  }
  console.log("numero: ", list[i].toString());
}
```

- description d'erreur?:  `Cannot read property 'toString' of undefined`
	- on ne peut pas utiliser la fonction toString() sur une valeur undefined
	- si on utilise <=, alors  i pourra avoir la valeur de la taille de la liste, c'est à dire 5, mais si on a i = 5 lorsqu'on fera list[i],  on va récupérer une valeur "undefined", car il n'y a pas de 6eme élément dans la liste
- solution?:  dans la boucle for utiliser la condition avec le signe inférieur < et non pas <= 
- si i = 2, quel sera le(s) message(s) dans la console ? : numero: 3
- si i = 1, quel sera le(s) message(s) dans la console ? :  c'est mon numéro préféré

> 🚨 ICI c'est il y a un petit piège, si i = 2 alors on aura list[2] ce qui correspond à la 3eme valeur de la liste donc 3.. donc if (3 === 2) donnera FALSE.. 

## 5. Callbacks

```javascript
const list = [10, 1, 54, 30, 200];

function filter(array, conditionFiltrage) {
   const listeFinal = 
   for (let i = 0; i < array.length; i++) {
	if (conditionFiltrage(array[i]) === true) {
	  listeFinal.push(result) 
	}
   }
   return listeFinal;
}

// code qui est correcte: 👍
function conditionFiltrage(element) {
  if(element > 40) {
    return true
  } else {
    return false
  }
}
filter(list, conditionFiltrage)

// code qui est idéal: ⭐️⭐️⭐️
function conditionFiltrage(element) {
  return element > 40;
}
filter(list, conditionFiltrage)


```

- rajouter le code qui va permettre de filtrer que les nombres supérieurs à 40. afin de se retrouver avec une liste: [54, 200]
- écrire le code qui permet d'executer tout le programme

## 6. Lecture / Ecriture


```javascript

console.log('calcul B');
function add(a, b) {
  console.log('Calcul a + b')
  return a+b;
}

function printTotalPrix(panier) {
 if (!panier) {
   console.log('panier vide');
 } else {

  console.log('articles');
  let total = 0;
  for (const element of panier) {
    total = add(total, element.prix);
  }
  console.log('prix total', total);
 }
}

const panier = [
 {name: "BD Asterix", prix: 10},
 {name: "DVD Pokemon", prix: 20},
]

console.log('calcul A');
printTotalPrix(panier);
printTotalPrix(); //panier vide
```

- Si on execute ce code, il y a des erreurs, à vous de réparer et faire en sorte d'avoir la fonction "printTotalPrix" fonctionnelle. Elle doit à la fin afficher le prix total 
- Peut tu indiquer (dans l'ordre d'apparition) les messages qui vont être affichés dans la console ?
- Maintenant modifier le code afin d'ajouter une condition quand le panier est vide.
	```javascript
	printTotalPrix();
	//print total prix doit SEULEMENT afficher un message "panier vide"
	  
	```
