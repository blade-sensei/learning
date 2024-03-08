
## C'est quoi 

- C'est un opérator qui vérifie si une propriété existe ou non dans un objet
- En l'utilisant, il va retourner soit un "true" ou "false"

Example

```js
const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in car);
// Expected output: true

```

## Exercices

```js
const car = { model: "XY", brand: "Tesla" }
const result = brand in car;

const shopKart = {}
const result = "object" in car;
```


1. Créer une fonction "filterSensitiveData" qui doit vérifier la donnée passé en paramètre de la fonction contient un "password" ou alors un "token", si c'est le cas alors il faut afficher un message "Sensitive Data" si non afficher "Data: [remplacez par le paramètre de la fonction]"


