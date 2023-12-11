/**
 * operator ||
 */

true || true; // t || t returns true
false || true; // f || t returns true
true || false; // t || f returns true
false || 3 === 4; // f || f returns false
'Cat' || 'Dog'; // t || t returns "Cat"
false || 'Cat'; // f || t returns "Cat"
'Cat' || false; // t || f returns "Cat"
'' || false; // f || f returns false
false || ''; // f || f returns ""
false || varObject; // f || object returns varObject

/**
 * operator &&
 */

a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = 'Cat' && 'Dog'; // t && t returns "Dog"
a6 = false && 'Cat'; // f && t returns false
a7 = 'Cat' && false; // t && f returns false
a8 = '' && false; // f && f returns ""
a9 = false && ''; // f && f returns false

// let voteable = (age < 18) ? "Too young":"Old enough";
// const t = thisValue || orThisValue
// const p = thisValue ??orThisValue

/**
 * ref:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * https://wiki.jelectronique.com/doku.php?id=fonctions_logiques
 */
