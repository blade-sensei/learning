var isPalindrome = function(x) {
    let number = x;
    let reverse = 0;

    if (number === 0) {
        return true;
    }

    if (number < 0) {
        return false;
    }
    if (getLastDigit(number) === 0) {
        return false;
    }
    
    while (reverse < number) {
        reverse = reverse * 10 + getLastDigit(number);
        number = Math.trunc(number / 10);
    }

    if (reverse === number) {
        return true;
    }

    return Math.trunc(reverse / 10) === number;
}

function getLastDigit(number) {
    return number % 10;
}

/**
 * description 
 * Coud you solve it without converting the integer to a string?
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 */