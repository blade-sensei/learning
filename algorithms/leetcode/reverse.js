function lengthDigits(number) {
    let counterDigits = 0;
    while (number) {
        counterDigits++;
        const divided = number / 10;
        number = Math.trunc(divided);
    }
    return counterDigits;
}
/**
 * Assume we are dealing with an environment which could only store
 *  integers within the 32-bit signed integer range: [−231,  231 − 1].
 *  For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows
 */

 /**
  * examples
  * Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
  */

function reverse(x) {
    const EXTREMS = {
        min: Math.pow(-2, 31),
        max: Math.pow(2, 31),
    }
    let numberToReverse = x;
    let numberOfDigits = lengthDigits(numberToReverse);
    let reversedNumber = 0;
    while (numberToReverse) {
        const lastDigit = numberToReverse % 10;
        reversedNumber += lastDigit * (10 ** (numberOfDigits - 1));
        numberToReverse = Math.trunc(numberToReverse / 10);
        numberOfDigits--;
    }
    if (reversedNumber >= EXTREMS.min && reversedNumber <= EXTREMS.max) {
        return reversedNumber;
    }
    return 0;
};

reverse(-521);
