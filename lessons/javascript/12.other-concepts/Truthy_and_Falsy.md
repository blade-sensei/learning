
## C'est quoi

On dit qu'une valeur est "truthy" ou "falsy" lors que cette valeur (primive ou non), peut être évalué / représenté comme une valeur de type de "boolean" (true ou false)


Example des valeurs qui vont être considérés comme "true"

### Les TRUTHY
```
true
1 -> devient un true
[] -> une array même s il est vide
{} -> un objet même s il est vide
" " ou alors "je ne suis pas vide" -> tout chaîne de character qui n est pas vide. 
function() -> une fonction sera aussi considéré comme truthy

```

### Les FALSY

```
false
0 ou -0
""
undefined
null
```

## Cas d'utilisations

Lors qu'on veut tester si une propriété existe ou pas, alors pour tester ça il nous suffit d'écrire 

```js
if (second.name) {
  console.log('ça existe');
}
```

- comme on peut le voir, écrire second.name suffit puis que il sera évalué comme true ou false et donc on peut l'utilise en tant que condition
- par contre attention, car si name égale à "" alors la condition passera pas, puisque "" est considéré comme un "false"


```js
const list = [];
const isFilled = list.length;

if (isFilled) {
  console.log('print list', list);
} else {
  console.log('condition is 0 so, false -> array empty')
}
```
