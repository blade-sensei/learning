// reference https://developer.mozilla.org/fr/docs/Glossary/Primitive

// **strings**
// different forms to create a string
const string1 = 'Une chaîne de caractères primitive';
const string2 = 'Là encore une valeur de chaîne de caractères primitive';
const string3 = 'Et ici aussi';

// **number**
const number = 30;
const number2 = 12.4;
const hello = -40;

// ** boolean **
const activated = true;
const shouldPass = false;

// **null and undefined **
// both types mean this variable HAS NO VALUE but
// reference: https://res.cloudinary.com/practicaldev/image/fetch/s--1MftApyk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/uq73osi7sqq8za8rbaw1.jpg

// null means I choose explictly the value "isEmpty"
const test = null;
console.log('this value', test);

// undefined means the "value" of this variable doesnt exist yet
let variableWithoutValue;
console.log('this value', variableWithoutValue);

// FYI to how the type of your variable use the "keyword" typeof
const theTypeOfMyVar = typeof number;
console.log(typeof number);
console.log(typeof string1);
console.log(typeof activated);
console.log(typeof test); // strange ? read -> https://2ality.com/2013/10/typeof-null.html
console.log(typeof variableWithoutValue);
console.log(typeof theTypeOfMyVar);
