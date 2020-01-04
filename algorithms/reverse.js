/**
 * 
 * @param {Array} array 
 */
function reverse(array) {
    // know pivot
    
    const pivot = Math.floor(array.length / 2);
    for (let i = 0; i < pivot; i++) {
        const oppositeIndex = (array.length - 1) - i;
        const currentValue = array[i];
        array[i] = array[oppositeIndex];
        array[oppositeIndex] = currentValue;
    }
    return array;
    // iterate from 0 to pivot (not included)
    // oposite symetric side index
    // save left side value
    // assign opposite symetric side value to current index
    // assign to symetric side the saved value

    //return reversed array
}

function isEven(number) {
    return number % 2 === 0
}

reverse([1, 2, 3, 4]);
reverse([1, 2, 3, 4, 5]);