/**
 * conditions are used to choose determinate a path in program
 */

/**
 * what if I want for say hello on different language based on the country
 *
 */

function sayHello(country) {
  if (country === 'England') {
    console.log('Hello 🏴󠁧󠁢󠁥󠁮󠁧󠁿');
  }
  if (country === 'France') {
    console.log('Salut 🇫🇷');
  }
}

sayHello('France');
console.log('---');
sayHello('England');

/**
 * IF statement can be pair with ELSE
 * with means "OTHERWISE" or "IF is not completed and I do the else"
 */

/**
 * IF statement with ELSE IF
 */

/**
 * Comparaison Operators
 */
/**
 * ==
 * ===
 * !=
 * !==
 * > or >=
 * < or <=
 */

/**
 * Logical operators used to determine the final result condition between many conditions
 * && or ||
 * can be transleted like
 *
 *
 */

const number = 0;
if (number === 2 || number === 4) {
  console.log('lucky number ');
}
// translation: IF (number is equal to 2 OR number is equals to 4 I DO the job
// we only need 1 condition to be true to get a global condtion result as true

const activate = true;
if (activate === true) {
  //
}

if (!activate) {
// activate !== true
// activate === false
}
