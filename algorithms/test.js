
const VALID_OCCURANCE_LETTER = 'a'

function isOccuranceOfA(letter) {
    return letter === VALID_OCCURANCE_LETTER;
}

function getNumberOfOccurance(word, maxLength) {
    let cursor = 0;
    let occurancesOfLetterA = 0;
    while(cursor < maxLength) {
        const currentLetter = word.charAt(cursor);
        if (isOccuranceOfA(currentLetter)) {
            occurancesOfLetterA++;
        }
        cursor++;
    }
    return occurancesOfLetterA;
}

function repeatedString(s, n) {
    const limitWord = s.length;
    let cursor = 0;
    let occurancesOfLetterA = 0;
    let minimumOccurances = getNumberOfOccurance(s, limitWord);

    const numberOfRepetions = n % limitWord;

    if (numberOfRepetions === 0) {
        occurancesOfLetterA =  minimumOccurances * (n / limitWord);
    } else {
        let firstRepetions = n / limitWord;
        firstRepetions = Math.trunc(firstRepetions);
        const occurances = getNumberOfOccurance(s, numberOfRepetions);
        occurancesOfLetterA = (minimumOccurances * firstRepetions) + occurances;
    }

    return occurancesOfLetterA;
}

const test = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
const limit = 736778906400;

console.log(repeatedString(test, limit));
