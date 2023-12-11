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
 * iteration 1
 * - i = 0 (this is only execut eone) -> to assign a value inside i
 * - 0 is under 3 ? OK
 * - then execute the code -> console log apple
 * - increment i -> i = 1 (using the code i += 1)
 * iteration 2
 * - i = 1 (base on the last action of the iteration 1)
 * - 1 is under 3 ? OK
 * - then execute the code -> console log banane
 * - increment i -> i = 2
 * iteration 3
 * - i = 2
 * - 2 is under 3 ? OK
 * - then execute the code -> console log orange
 * - increment i -> i = 3

 * - NO iteration 4
 * - i = 3
 * - 3 is under 3 ? NO (because 3 is EQUALS to 3 no UNDER)
 * - then NO ITERATION, SO LOOP IS STOPED
 */

for (console.log('LOL'); ;) {
  // do nothing BUT executes the "initialExpression"
}
