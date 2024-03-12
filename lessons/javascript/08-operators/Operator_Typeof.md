
- L'opérateur **`typeof`** renvoie une string (chaine de caractère) qui indique le type d'une valeur / variable


## Examples

```js
console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"
```

## Exercices 

On souhaite créer une fonction parseBoolean, qui va s'assurer de renvoyer toujours un type boolean (soit true ou false), mais la fonction peut convertir que 3 types, 
- si l'input est un boolean alors il n'a rien a faire, il retourne la même valeur
- si l'input est une string, il faut s'assurer que on a "true" ou "false" (STRINGS) et convertir en boolean
- si l'input c'est un number, alors on converti uniquement le 0 en false et le 1 en true

le reste des cas, on peut dire que il y a une erreur avec un console.log("Error de input")

