function Objects2() {
  // you should becareful with the local variables used inside the function, the parameters and the external variable

  const name = 'JOHN';
  console.log('out of scope variable', name);

  function hello(name) {
    console.log('hello you:', name);
  }

  function anotherFunction() {
    const name = 'thi is the name inside the SCOPE function';
    console.log('anotherFunction:', name);
  }

  function thisFunctionCanUseAParentScopeVariable() {
    const copie = name;
    console.log(copie);
  }

  console.log('the name in the higher scope is still the same JOHN =', name);

  /**
   * in a nutshell
   *  - in général scopes are determinated when you use braces {}
   *  - a higher/parent scope can not access to lower/child/nested scopes
   *  - a lower scope can access/use the variable of a higher scope
   */
}

/**
 * references
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1
 */
