function Objects2() {
  /**
 * a function can also return another function
 */
  function hello() {
    console.log('hello !');
    const goodBye = function () {
      console.log('goodbye');
    };
    return goodBye;
  }

  const goodbyeCopy = hello();

  goodbyeCopy();
}

Objects2();
/**
 * references
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1
 */
