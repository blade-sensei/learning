

## Example

```js
let a // undefined (falsy value)

let b = null // null (falsy value)

let c = undefined // undefined (falsy value)

let d = 4 // number (truthy value) => l'intepréteur s'arrête

let e = "five" // a été court-circuité par l'interpréteur

let f = a || b || c || d || e
```


## Exercices

```js

function p(name) { console.log(name || "default"); } p(); // => "default" p(null); // => "default" p(undefined); // => "default" p(""); // => "default" p(false); // => "default" p(0); // => "default"

```