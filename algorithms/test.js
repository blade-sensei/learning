function lengthDigits(number) {
    let counterDigits = 0;
    while (number > 0) {
        counterDigits++;
        number = Math.floor(number / 10);
    }
    return counterDigits;
}

function reverse (x) {

    let numberToReverse = x;
    let numberOfDigits = lengthDigits(numberToReverse);
    let reversedNumber = 0;
    while (numberToReverse > 0) {
        const lastDigit = numberToReverse % 10;
        reversedNumber += lastDigit * (10 ** (numberOfDigits - 1));
        numberToReverse = Math.floor(numberToReverse / 10);
        numberOfDigits--;
    }
    return reversedNumber;
};

reverse(123);

