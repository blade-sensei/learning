/**
 * In the recent version of node js you can write the object using shortcuts
 *
 */

const firstname = 'Paul';

// this a shortcut syntax, IF the variable that CONTAINS the VALUE
// has the same name as the KEY, then we can use the variable without doing
// {  firstname: firstname }
const person = {
  firstname,
};

// if the variable that contains the value has not the same name
// we cannont use the shortcut

// firstName has not the same variable name thant firstname
const firstName = 'Marie';
const anotherPerson = {
  firstname: firstName,
};

console.log(person, anotherPerson);

/**
 * references
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1
 */
