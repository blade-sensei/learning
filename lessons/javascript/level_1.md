
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


- on  [déclare] une variable "a" et on [assigne] une valeur "test".
- on [déclare] une variable "b".
- on [re-assigne] la valeur "code" à la variable "a"
- on [déclare] une variable "client"
- le type de variable "client" est un: [objet]
- l'object client possède 3 [propriétés] , avec la première comme type: [string]
- client.commande  est de type  [function]
- on [définit] la fonction "hello" qui en [paramètre] un client
- si on [appelle] , la fonction hello va être exécutée

## 2.  Types de données

- donner les deux groupe de "type de variables"
	- [primitives et object]
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

- description d'erreur?: dans le ligne 81, dans la bouclle for, l'erreur vient du signe <= qui à la dernière boucle, itérera sur sur un élément qui n'existe pas 
- solution?: utiliser le signe <
- si i = 2, quel sera le(s) message(s) dans la console ? : c'est mon numéro préféré
- si i = 1, quel sera le(s) message(s) dans la console ? : numero: 1


## 5. Callbacks

```javascript
const list = [10, 1, 54, 30, 200];

function filter(array, conditionFiltrage) {
   const listeFinal = [];
   for (let i = 0; i < array.length; i++) {
	if (conditionFiltrage(array[i]) === true) {
	  listeFinal.push(array[i]) 
	}
   }
   console.log(listeFinal)
   return listeFinal;
}

function conditionFiltrage(element) {
  if(element > 40) {
    return true
  }
}

filter(list, conditionFiltrage)

```

- rajouter le code qui va permettre de filtrer que les nombres supérieurs à 40. afin de se retrouver avec une liste: [54, 200]
- écrire le code qui permet d'executer tout le programme


## 6. Lecture / Ecriture
console.log('calcul B');

function add(a, b) {
  console.log('Calcul a + b');
  return a + b;
}

function printTotalPrix(panier) {
  console.log('articles');

  let total = 0;
  for (const element of panier) {
    total = add(total, element.prix);
  }
  console.log('prix total', total);
}

const panier = [
  { name: 'BD Asterix', prix: 10 },
  { name: 'DVD Pokemon', prix: 20 },
];

console.log('calcul A');
printTotalPrix(panier);

- appartion des console.log : 
console.log('calcul B');
console.log('calcul A');
console.log('articles');
console.log('Calcul a + b');
console.log('prix total', total);

