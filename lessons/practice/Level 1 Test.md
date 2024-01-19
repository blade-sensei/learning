
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


- on  [...] une variable "a" et on [...] une valeur "test".
- on [...] une variable "b".
- on [...] la valeur "code" à la variable "a"
- on [...] une variable "client"
- le type de variable "client" est un: [...]
- l'object client possède 2 [...] , avec la première comme type: [...]
- client.commande  est de type  [...]
- on [...] la fonction "hello" qui en [...] un client
- si on [...] , la fonction hello va être exécutée

## 2.  Types de données

- donner les deux groupe de "type de variables"
	- [....]
		- donner au moins 3 types de variable pour ce groupe
	- [....]

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
- b 
- x
- z
- s
- r
- a

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

- description d'erreur: 
- solution: 
- si i = 2, quel sera le(s) message(s) dans la console ? 
- si i = 1, quel sera le(s) message(s) dans la console ? 

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
```

- rajouter le code qui va permettre de filtrer que les nombres supérieurs à 40. afin de se retrouver avec une liste: [54, 200]
- écrire le code qui permet d'executer tout le programme

