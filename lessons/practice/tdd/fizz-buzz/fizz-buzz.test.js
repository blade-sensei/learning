

function isDivisibleBy3(number) {
  return number % 3 === 0;
}


function isDivisibleBy5(number) {
  return number % 5 === 0;
}

function fizzBuzz(startNumber, endNumber) {
  const [Fizz, Buzz] = ['Fizz', "Buzz"]
  let result = '';
  for (let i = startNumber; i <= endNumber; i++) {
    startNumber = i;
    if (isDivisibleBy3(startNumber) && isDivisibleBy5(startNumber)) {
      result = result.concat(`${Fizz}${Buzz}`);
      continue;
    }
    if (isDivisibleBy3(startNumber)) {
      result = result.concat(Fizz);
      continue;
    }

    if (isDivisibleBy5(startNumber)) {
      result = result.concat(Buzz);
      continue;
    }
    result = result.concat(startNumber);
  }

  return result;

}

describe('Fizz Buzz Game', () => {
  test('simple scenario: given the number 1 it should print 1', () => {
    const result = fizzBuzz(1, 1);

    expect(result).toBe('1');
  });

  test('simple scenario: given the number 2 it should print 2', () => {
    const result = fizzBuzz(2, 2);

    expect(result).toBe('2');
  });

  test('3 divisible scenario: given the number 3 it should print Fizz', () => {
    const result = fizzBuzz(3, 3);

    expect(result).toBe('Fizz');
  });

  test('3 divisible scenario: given the number 3 it should print Fizz', () => {
    const result = fizzBuzz(6, 6);

    expect(result).toBe('Fizz');
  });

  test('5 divisible scenario: given the number 5 it should print Fizz', () => {
    const result = fizzBuzz(5, 5);

    expect(result).toBe('Buzz');
  });

  test('5 divisible scenario: given the number 5 it should print Fizz', () => {
    const result = fizzBuzz(10, 10);

    expect(result).toBe('Buzz');
  });

  test('scenario simple 1 to 2: should print 12', () => {
    const result = fizzBuzz(1, 2);

    expect(result).toBe('12');
  });

  test('scenario simple 7 to 8: should print 78', () => {
    const result = fizzBuzz(7, 8);

    expect(result).toBe('78');
  });

  test('scenario fizz 1 to 3: should print 12Fizz', () => {
    const result = fizzBuzz(1, 3);

    expect(result).toBe('12Fizz');
  });

  test('scenario fizz 7 to 9: should print 12Fizz', () => {
    const result = fizzBuzz(7, 9);

    expect(result).toBe('78Fizz');
  });

  test('scenario buzz 4 to 5: should print 4Buzz', () => {
    const result = fizzBuzz(4, 5);

    expect(result).toBe('4Buzz');
  });

  test('scenario fizzbuzz 15: should print FizzBuzz', () => {
    const result = fizzBuzz(15, 15);

    expect(result).toBe('FizzBuzz');
  });

  test('scenario fizzbuzz 15: should print FizzBuzz', () => {
    const result = fizzBuzz(1, 5);

    expect(result).toBe('12Fizz4Buzz');
  });

  test('scenario fizzbuzz 15: should print FizzBuzz', () => {
    const result = fizzBuzz(1, 15);

    expect(result).toBe('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz');
  });
});


/**
 *
 * given the number 1 it should print 1 🟢
 * given the number 2 -> print 2 🟢
 * given the number 3 il should print Fizz (divisible by 3) 🟢
 * given the number 5 - Buzz (divisible by 5 🟢
 * given the number 15 FizzBuzz (both 5 and 3) 🟢
 * should run on 100 numbers - 1 to 100  
 * should return "string" when the number is normal "1" or "2" for example instead of 1 2 🟢
 * implement a test to test from 1 to 2 or 3 🟢
 * todo: create const to reuse FizzBuzz each word
 */
