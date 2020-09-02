function reductionCost(num) {
    if (num < 2 || num.length > 2**50) return 0;
    let totalCost = [];

    let numbers = [...num];
    const number = 0;
    while(numbers.length > 1) {
        numbers = sortingAscending(numbers);
        const cost = numbers[number] + numbers[number+1];
        totalCost.push(cost);
        numbers[number+1] = cost;
        numbers.shift();
    }

    return sum(totalCost);
}

function sortingAscending(array) {
    return array.sort((first, second) => first-second);
}

function sum(array) {
    return array.reduce((a, b)=> a + b, 0);
}
///

const shiftWord = (word, left, right ) => {
    const wordLetters = word.split('');
    if (wordLetters.length <= 1) return word;
    const wordIndexesMap = { ...wordLetters} 
    let wordIndexesShifted = Object.keys(wordLetters).map(index => Number(index));
    wordIndexesShifted = shiftLeft(wordIndexesShifted, left);
    wordIndexesShifted = shiftRight(wordIndexesShifted, right);
    const wordShiftedLetters = wordIndexesShifted.map(index => {
        return wordIndexesMap[index];
    });
    return wordShiftedLetters.join('');
}

const shiftLeft = (wordIndexes, shift) => {
    const restShift = getRestShift(wordIndexes.length, shift);
    const shiftedIndexes = [];
    if (restShift === 0) return word;
    wordIndexes.forEach((indexWord, index) => {
        let nextIndex = index - restShift;
        if (nextIndex < 0) {
            nextIndex = wordIndexes.length + nextIndex;
        }
        shiftedIndexes[nextIndex] = indexWord;
    });
    return shiftedIndexes;
}

const getRestShift = (indexesLength, shift) => shift % indexesLength;

const shiftRight = (wordIndexes, shift) => {
    const restShift = getRestShift(wordIndexes.length, shift);
    const shiftedIndexes = [];
    if (restShift === 0) return word;
    wordIndexes.forEach((indexWord, index) => {
        let nextIndex = index + restShift;
        if (nextIndex > wordIndexes.length - 1) {
            nextIndex = wordIndexes.length - nextIndex;
        }
        shiftedIndexes[nextIndex] = indexWord;
    });
    return shiftedIndexes;
}


const test = 'happy';
const left = 3;
const right = 1;

console.log(shiftWord(test, left, right));