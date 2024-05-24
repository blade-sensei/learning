# Functions


 v

-  2 STEPS when you want to use a function
  - 1 STEP: the definition of this function
      // means that you create the "SHAPE" and the JOB that the function should do

```javascript
function hello() {
  console.log('hello !');
}
```

- ​	2 STEP: you run the function, this is a "CALL" of the function:

     -  we use the name of the function and we add the "()"

  ```javascript
  hello();
  ```

     - this can also be called "INVOCATION"
     - a function can "RETURN" something OR can just "DO something without any result"

## Parameters 

- a function can accept parameters, this used when you want different behaviour or results
- DEPENDING on a VARAIBLE X
  say: my function should do: a+b and get user of this function should provide 2 parameters
- here we depend on a variable A and B, that can be 1, 2, 10 or any other number

```javascript
function sum(a, b) {
	return a + b;
 }

console.log(sum(4, 10)); // 14
```



## New syntax

```javascript

  /**
   * another way to right a function is with this new synxtax
   * this is the same as the first function sum
   * we will see later the small differences, for now consider these as equal
   */
  const sum2 = (a, b) => a + b;

  function sum(a, b) {
	return a + b;
  }

```



# References
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1

