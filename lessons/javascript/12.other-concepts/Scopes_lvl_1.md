Comment expliquer concept de base

- Le scopes permettent de limiter l'utilisation des variable dans un espace défini, c'est une sorte de bulle
- En général il sont déterminés par les accolades { } les functions, les if, else, for etc (sauf pour les objets..)

Pourquoi

- Pour améliorer diviser / ranger le code, avec les bons "compartiments"
- Eviter les erreurs de collision, erreur de pourquoi cette variable est undefined ? ou alors pourquoi ma variable a changé

## Examples

## Access

- prenant le cas d'un scope "parent" qui englobe un autre "scope" qu'on va appeler "enfant"

![[1_BwARRnm0-gFoh-Rq_ubbwQ.png]]

- dans l'espace du parent on a crée certaines variables, ces variables peut être visible / utilisé par les enfants
- par contre ce qui est crée dans l'espace des enfants, ne peut pas être connus / visibles dans l'espace des parents

```js
let username = 'John';

if (true) {
  console.log('inside a scope', username); //je peux voir la variable username de mon parent
}
console.log('same scope as username declaration', username); //ici je suis dans le même espace que mon parent donc je peux aussi voir la variable username
```

```js
//espace parent
if (true) {
  //espace enfant
  let username = 'Toto'; //ici je crée la variable dans l espace enfant (scope)
  console.log('inside a scope', username);
}

console.log('same scope', username); //❌ ERROR, je peux pas connaitre ce qui a été crée dans l'espace de l'enfant
```

## Déclaration avec les mêmes noms de variables

- Grâce au scope on crée des "espaces" différent pour l'execution du code
- Donc on peut utiliser les mêmes noms de variable dans 2 scopes différents, mais Javascript sait qu'il s'agit de variable différentes (grâce à la différence de scope)

```js
let username = 'John'; //username_du_scope_global

if (true) {
  let username = 'Toto'; //username_du_scope_block_if
  console.log('inside a scope', username);
}

console.log('same scope as username declaration', username);
```

Quel est l'erreur

## Scopes functions

```js
function hello() {
  const message = 'Hi 👋';
  console.log(message);
}

hello();
console.log(message); //❌ message existe seulement dans le scope function message
```

ça marche pareil que le scope précédent, comme le. if, else, for etc ...

- petite précision, on remarque que c'est pareil, mais grâce à l'utilisation de const et let, alors que si on utiliserai "var" on comprendrai plus techniquement le particularité du scope function.

Et si on rajoute un scope dans autre scope ?,
on va rajouter un scope if à l'intérieur d'un autre scope function

```js
let message = 'Global message';
function hello() {
  if (true) {
    console.log('surprise:', message); //message du scope parent est toujours accessible même si on a rajouté une couche
  }
  console.log(message); //même chose
}

hello();
console.log(message);
//par contre que si on rajoute const message = "test" juste avant le if ?
//dans ce cas message du "if" fais référence au message parent du scope le plus propre
```

## Exercices

```

```

Des erreurs avec les callbacks
