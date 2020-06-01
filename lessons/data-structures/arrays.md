
Array '[]'
===

> All examples are Javascript langage.

One on the must used data structure
It's used to store one/many data of **same nature** or **different nature**, in order to get ALL of this
data in one place (this array).

# Examples of arrays

```javascript
['apple', 'orange', 'pineapple'] -> same nature
[ {'name': 'Naruto'}, 'Ninja', []] -> different nature, the first is an object, second is a string and the third an empty array
```

> Depending on the langage that we need to use an extra coding instruction or using an array variant in order to use  'different nature' array.

# How to use it

Now we need to see how to create an array, make basics instructions like add elements, delete, get and element. You need to learn how to do it in your langage.

The basics operations:

- create

```javascript
//creation 
const fruits = []; 

```

- add element(s)

```javascript 
fruits[0] = 'apple' 
fruits[1] = 'orange'
fruits.push('pineapple')

//['apple', 'orange', 'pineapple']

```
  
- delete elements(s)

```javascript
delete fruits[2]

```

- find and element(s)

```javascript
console.log(fruits[1]) //orange
```
- find and specific element(s) with loops and if condition like

```javascript
fruits.forEach((fruit) => {
  if (fruit === 'orange') console.log(fruit)
})
```


