/*

You are given an input string.

For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

But will your code be performant enough?
 */


function numericals(s){
    const symbols = s.split('');
    const occurancesOfSymbols = [];
    const mapping = [];
    
  
    
    for (symbol of symbols) {
      const finded = mapping.find((saved) => {
        return saved[0] === symbol;  
      })    
      if (!finded) {
        console.log(finded);
        const saveOccurance = [symbol, 1];
        mapping.push(saveOccurance);
        occurancesOfSymbols.push(1);
      } else {
        console.log(finded);
        finded[1] = finded[1] + 1;
        occurancesOfSymbols.push(finded[1]);
  
      }
    }
  
    return occurancesOfSymbols.join('');
  }

  // shallow copy of array could be this possible

/**
 * even or odd
 */

 /**
  * sum of positifs
  */

 function positiveSum(arr) {
    const positiveNumbers = arr.filter(positive => {
      return positive > 0
    });
    console.log(positiveNumbers);
    if (positiveNumbers.length <= 0) {
      return 0;
    }
    const sum = positiveNumbers.reduce((number, post) => {
      return number + post;
    })
    return sum;
  }

  /**
   * opposite number
   */

  function opposite(number) {
    //your code here
    
      return number * -1;
    
  }

  /**
   * better solution is
   */

  return -number;


  /**
   * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


   */

  function removeChar(str){
    //You got this!
    const first = str.slice(1);
    console.log(first)
    const second = first.slice(0, first.length -1);
    console.log(second);
    return second
   };

/**
 * Write a function called repeatString which repeats the given String src exactly count times.
 * 
 * What i lern with this function. Thre is a repeat function for string. I did it with for loop
 * 
 */


 /**
  * In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
  * 
  */

 function makeNegative(num) {
    if (num < 0) return num
    return -num;
  }

/**
 * That i learn. To find lowest number in the array use Math.min
 */

class SmallestIntegerFinder {
    findSmallestInt(args) {
      const min = Math.min(...args);
      console.log(min)
      return min;
    }
  }

  /**
   * Difference str.substring et reduce
   */

/**
 * Simple, remove the spaces from the string, then return the resultant string.
 */

function noSpace(x){
    let finalString = '';
    
    x.split('').forEach(iteration => {
      if (iteration !== ' ') finalString = finalString + iteration;
    })
  
    return finalString;
  }

// meilleur solution

// celle de join
return x.replace(/\s/g, '');
function noSpace(x){return x.split(' ').join('')}


/**
 * 
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
 */

var summation = function (num) {
    // Code here
    
    let result = 0;
    let i = 0;
    while(i <= num) {
      result = result + i;
      i++
    }
    return result;
  }

  /**
   * other solutions
   */

  function summation(num) {
    return num * (num + 1) / 2
  }

  /**
   * Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
   */

  function countSheeps(arrayOfSheep) {
    let result = 0;
      arrayOfSheep.forEach(sheep => {
        if (sheep) result++;
      })
      return result;
    }

    /**
     * alternatives
     */
return arrayOfSheeps.filter(Boolean).length;



/**
 * The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
 */

function basicOp(operation, value1, value2)
{
  if (operation === '+') {
    return value1 + value2;
  }
  else if (operation === '-') {
    return value1 - value2;
  }
  else if (operation === '*') {
    return value1 * value2;
  }
  return value1/value2
}
// alternative d'utiliser eval qui prend une chaine, mais c'est pas une methode safe et est plus lente que la normal


/**
 * Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */

function boolToWord( bool ){
    const result  = bool ? 'Yes':'No';
    return result;
}
return bool ? 'Yes':'No';



/**
 * 
 * This time no story, no theory. The examples below show you how to write function accum:
 */
function accum(s) {
    let result = [];
    
    s.split('').forEach((char, iteration) => {
      const repeated = char.repeat(iteration+1);
      console.log('test', repeated);
      let capitalized = repeated.toLowerCase().split('');
      capitalized[0] = capitalized[0].toUpperCase();
      capitalized = capitalized.join('');
      result.push(capitalized);
      result.push('-')
    });
    console.log(s);
    result = result.slice(0, result.length - 1);
    return result.join('');
    
    }


/**
 * count number of vowels in string
 */


 //best solution
 function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

// other solution 

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

  /**
   * Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
   * 
   */

  function findOdd(A) {
    //happy coding!  
    const occurancesTable = [];
    
    A.forEach(number => {
      const exist = occurancesTable.find(occurance => {
        return occurance[0] === number;
      });
      
      if (!exist) {
        occurancesTable.push([number, 1]);
      } else {
        exist[1] = exist[1] + 1;
      }
    });
    
    const odd = occurancesTable.find(occurance => {
      return (occurance[1] % 2 !== 0)
    });
    console.log(odd);
    
    return odd[0];
    
  }
  // solution better

  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
