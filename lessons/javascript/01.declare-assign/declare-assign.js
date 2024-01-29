// declare means just define/set the name of the variable i will use
let thisIsDeclaredButNotAssigned;

// assignment means associate a VALUE to variable and to do this, we use the operator: equal "="
thisIsDeclaredButNotAssigned = 5;
thisIsDeclaredButNotAssigned = 10;

// we can declare AND Assign at the sametime. Here we are doing both at the same time
const thisIsDeclaredAndAssigned = 4;

// FYI: if you use "const" to create your variable you have no choice, assignment is required
// const thisVariableIsDefinedButNotAssigned;
// this will generate an error https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_initializer_in_const

console.info(thisIsDeclaredAndAssigned, thisIsDeclaredButNotAssigned);

/**
 * references
 * https://users.cs.utah.edu/~germain/PPS/Topics/assignment_statement.html#:~:text=To%20%22assign%22%20a%20variable%20means,is%20the%20double%20equals%20sign.
 */
