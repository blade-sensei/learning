
Array '[]'
===

> All examples are Javascript langage.

One on the must used data structure.

It's used to store one/many data of **same nature** or **different nature**, in order to get ALL of this
data in one place (this array).

## Examples of arrays

```javascript
// same nature elements
['apple', 'orange', 'pineapple']

[ {'name': 'Naruto'}, 'Ninja', []]
// -> different nature, the first is an object, second is a string and the third an empty array
```

> Depending on the langage, sometimes we need to use an extra coding instruction or an array variant in order to use  'different nature' arrays.

## How to use it

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
fruits.push('pineapple') // push add an element at the end of the array

//result: ['apple', 'orange', 'pineapple']

```
  
- delete elements(s)

```javascript
delete fruits[2]
//this is the must primitive way to delete an element but we will see that we don't use it often... most of the time we use 'filters, maps, splice'.

```

- find and element(s)

```javascript
console.log(fruits[1]) //get the second element, 0 is the begining
```
- find and specific element(s) with loops and if condition like

```javascript
fruits.find(fruit => fruit === 'orange');
// we use a forEach iteration to get the orange fruit and print it.
```

## Middle and common operation/function of array

- add element at the end (push) and begining (shift)
- delete the last and first element (pop, unshift)
- concat arrays
- filter elements
- map (like convertion)
- (splice, slice) cut/replace/delete
- find and replace
- clone array
- be confortable with multi dimentional array (array into array)
- sort an array

Check this to JS array method for all of this operations
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#

## Exercises 


- Swap to elements without 3 variables
- Reverse array 
- Nombre pair le + petit
- Intersection of array
- Find Max and Minimum of unsorted array
- Delete repeated numbers of array
- Check if contains a number if they Array
- Not the largest path in path matrix m*m

++ https://www.geeksforgeeks.org/array-data-structure/

# Note

Feel free to send to suggest improvement to this post.