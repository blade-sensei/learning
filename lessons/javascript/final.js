// DECLARE | ASSIGN | CONDITION EXP | CALL/INVOKE | ITERATE
// STATEMENT (execute code) | EXPRESSION (value)

/**
 * ref: https://www.baeldung.com/cs/expression-vs-statement
 */

// DECLARE | ASSIGN | CONDITION EXP | CALL/INVOKE | ITERATE | COPY

const value = 132; // declare + Assignation

const isReady = status === 'ready'; // expression condition
if (isReady) {}

function getUser(uid) { //declare
  // user
}

getUser(); //cal invoke

for (number of [1, 3, 4]) { //iteration
  console.log(number);
}

const button = status === 'ready' ? 'GREEN' : 'RED'; 

