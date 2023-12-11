/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
function Copies2Lesson() {
  // numbers
  const a = 10;
  const b = a;
  const c = b + 5;

  const i = 'hello';
  let o = i;
  o = o.concat(' dev'); // becarefull, concat doesnt change your variable, it returns a new one
  const p = o;

  // o = ?
  // p = ?
  // i = ?

  // c = 15
  // a remains unchanged = 10
  /**
   * even if b is the copie of a, and we add +5 to b, it doesnt menas we have change a
   * a remains 10
   * now lets see what happen with objects (or arrays)
   */
  console.log({ o, p, i });

  const x = { name: 'test', age: 10 };
  const y = x;

  y.age = 30;
  const z = y;

  // x = ?
  // y = ?
  // z = ?
  console.log({ x, y, z });
}

Copies2Lesson();
/**
 * references
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1
 */
