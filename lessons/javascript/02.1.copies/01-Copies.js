/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
function CopiesLesson() {
  // numbers
  const a = 10;
  const b = 20;

  const x = a;
  const z = x + 30 + b;

  const s = x + a;
  const r = s + z;

  // z = ?
  // s = ?
  // r = ?

  // strings

  const g = 'pommme';
  const k = 'orange';

  let c = g;
  c = k;

  const t = g + ' ' + 'pinky lady'; // pomme pinky lady
  const h = c + ' has a bug'; // orange has a bug

  const y = c + 'test'; // orangetest
  const p = t + ' and ' + h; // pomme pinky lady and orange has a bug

  // t = ?
  // h = ?
  // y =  ?
  // z = ?
}

CopiesLesson();
/**
 * references
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1
 */
