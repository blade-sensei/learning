
function fizzBuzz(number, numberEnd) {

  let finalWord = '';
  for (let i = number; i <= numberEnd; i++) {
    const normalResult = `${i}`;
    if (i % 3 === 0 && i % 5 === 0) {
      const word = 'FizzBuzz'
      finalWord = finalWord.concat(word);
    }

    else if (i % 3 === 0) {
      const word = 'Fizz'
      finalWord = finalWord.concat(word);
    }

    else if (i % 5 === 0) {
      const word = 'Buzz'
      finalWord = finalWord.concat(word);
    }

    else {
      const word = normalResult;
      finalWord = finalWord.concat(word);
    }

  }

  return finalWord;

}

describe('Fizz Buzz Game', () => {
  test('simple scenario: given the number 1 it should print 1', () => {
    const result = fizzBuzz(1, 1);
    expect(result).toBe('1');
  });

  test('divisible 3 scenario: given 3 it should print Fizz', () => {
    const result = fizzBuzz(3, 3);
    expect(result).toBe('Fizz');
  });

  test('divisible 5 scenario: given 5 it should print Buzz', () => {
    const result = fizzBuzz(5, 5);
    expect(result).toBe('Buzz');
  })

  test('range scenario: given 1 to 2 it should print 12', () => {
    const result = fizzBuzz(1, 2);
    expect(result).toBe('12');
  })

  test('divisible 15: FizzBuzz', () => {
    const result = fizzBuzz(15, 15);
    expect(result).toBe('FizzBuzz');
  })

  test('range scenario: given 1 to 2 it should print 12', () => {
    const result = fizzBuzz(1, 3);
    expect(result).toBe('12Fizz');
  })

});


/**
 *
 * given the number 1 it should print 1 
 * given the number 2 -> print 2 
 * given the number 3 il should print Fizz (divisible by 3) 
 * given the number 5 - Buzz (divisible by 5 
 * given the number 15 FizzBuzz (both 5 and 3) 
 * should run on 100 numbers - 1 to 100  
 * should return "string" when the number is normal "1" or "2" for example instead of 1 2 
 * implement a test to test from 1 to 2 or 3 
 * todo: create const to reuse FizzBuzz each word
 */
