L'**instruction `for...in`** permet d'itérer sur les [propriétés énumérables](https://developer.mozilla.org/fr/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) d'un objet qui ne sont pas [des symboles](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un [bloc](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/block) d'instructions).
## Example 

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

```


## Exercices

```bash
On souhaite créer une fonction qui va prendre un objet en paramètre et va transformer en majuscule chaque clé de cet object
```


```bash
exercice 2
Faire une fonction qui va prendre un objet en paramètre qui a des clés avec underscore et la remplacer par de dash. 

input = { camel_case = "test" }
output = { camel-case = "test" }

```