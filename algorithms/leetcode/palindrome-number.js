/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } else {
        const reverse = getReverse(x);
        if (reverse === x) {
            return true;
        }
        return false;
    }
  
  };
  
  
  function getLength(number) {
      let length = 0;
  
      while (number) {
          length++;
          number = Math.trunc(number/10);
      }
      return length;
  }
  
  function getReverse(number) {
      let length = getLength(number);
      let multiplierIteration = 10 ** (length - 1);
      let reverse = 0;
      while (number) {
          const lastDigit = number % 10;
          reverse += lastDigit * multiplierIteration;
          number = Math.trunc(number / 10);
          multiplierIteration /= 10
      }
      return reverse;
  }
  
  const test = isPalindrome(121);