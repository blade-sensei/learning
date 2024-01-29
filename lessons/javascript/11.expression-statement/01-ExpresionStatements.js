/**
 * Now that you know how to write the basics of a JS code (vars, functions, arrays..)
 * you can check this lesson to have more details about the "JS structure"
 * this lesson is NOT required or critical, if you dont understand everything, it is OK
 */

/**
 * The idea of this is have some example to understand the difference beetwen expression et statement
 * the benefits:
 *  - understand vocabullary to communicate with other devs or read documentation
 *  - to understand some libraries docs
 *  - to be able to "replace" or refactor some expressions
 *  - to avoid some syntaxis errors
 */

/**
 * expression: An expression usually refers to a piece of code that can be evaluated to a value
 * statement def: a statement refers to a piece of code that executes a specific instruction or tells the computer to complete a task
 */


/**
 * EXPRESSIONS
 */

(1 + 3) // -> "this text is an expression because it creates a VALUE which will be evaluated as 4"
(status === 'open') // -> status === open can be "evaluated" as value because it will be equals to a VALUE (true or false)
(i++) // -> it can be splited -> i = i+1 | i+1 is the expression and the the entire line i = i+1; is a statement
(3 < 10)
(true || false) 
(true)


for (let i = 0; i < 10; i++)  //the three arguments are expressions
/**
 * let i = 0 is an expression because we create a value 
 * i < 10 will be evaluated to create a value, either false or true
 * i++ is like doing i = i+1 so we created a new value
 */

/**
 * STATEMENTS 
 */

const number = 1 +5; //the entire line is a statement (composed by an expression 1+5)
function doThis() {
  //everythings herer is an block statement
}

//for (for ...) {} -> statement
//if () -> conditional statement composed by condition expressions like  status === '' or 12 < 400

/**
 * as you can see, sometime the statements have some expression to be executed
 */

/**
 * Examples of benefits
 */



/**
 * refs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
 * https://2ality.com/2012/09/expressions-vs-statements.html
 * https://farside.ph.utexas.edu/teaching/329/lectures/node11.html
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while check the doc
 */

//JavaScript expects you to use a statement you can use an expression but where JavaScript expects an expression you are not able to use a statement.
