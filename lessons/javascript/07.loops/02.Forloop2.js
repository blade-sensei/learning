/* eslint-disable no-restricted-syntax */
/**
 * When we want to process data based on EACH element of a list
 * we want to go throught the list
 * go from the START to the END of the list
 * we call this an ITERATION
 */
const fruits = ['apple', 'banana', 'orange'];

/**
 * THE MOST basic/traditional way to iterate on a list is this:
 * for ( [initialExpression] ; [conditionToStartANewIteration]; [expressionToDoAfterIteration] )
 *   //actions
 */

for (let i = 0; (i < fruits.length); (i += 1)) {
  const fruit = fruits[i];
  console.log(fruit);
}

/**
 * a must recent syntax you can use
 * for (  $elementVariableName of $elements )
 */

for (const fruit of fruits) {
  console.log('-', fruit);
}

/**
 * what happens if you want also to use the INDEX ?
 */

for (const [index, fruit] of fruits.entries()) {
  console.log('-', index, fruit);
}
// fruits.entries() is equal to:
const entries = [
  [0, 'apple'],
  [1, 'banana'],
  [2, 'orange'],
];

// So
for (const [index, fruit] of entries) {
  console.log('*', index, fruit);
}
