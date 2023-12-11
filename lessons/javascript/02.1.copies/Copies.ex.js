/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */

/**
   * numbers
   */
const a = 40;
const b = 12;

let x = a;
const z = x + 2 + b;

const s = x + a;
x = 30;

const r = s + z;

// z = ?
// s = ?
// r = ?

/**
 * strings
 */
let g = 'water';
const k = 'food';

let c = g;
c = k;
g = 'changed';

const t = g + ' ' + 'random';
const h = c + ' test';

const y = c + 'title';
const p = t + ' and ' + h;

// t = ?
// h = ?
// y =  ?
// z = ?

/**
 * references
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1
 */
