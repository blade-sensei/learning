/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let prefix = '';

    if (strs.length === 1) {
        return strs[0];
    }

    for (let i = 0; i < strs.length - 1; i++) {
        const firstWord = strs[i];
        const secondWord = strs[i+1];
        if (i === 0) {
            prefix = firstWord;
        }

        prefix = pref(prefix, secondWord);
    }
    return prefix;
};


function pref(first, second) {
    const arryaFirstWord = first.split('');
    const arraySecondword = second.split('');
    let prefix = '';
    let index = 0;
    let over = false;
    while (!over) {
        const letterF = arryaFirstWord[index];
        const letterS = arraySecondword[index];
        
        if (wordMaximumOver(letterF, letterS) || !compatible(letterF, letterS)) {
            over = true;
            return prefix;
            // sortir boucle ?
        } else {
            prefix+= letterF;
            index++;
        }
    }
    return prefix;
}

function wordMaximumOver(first, second) {
    return !first || !second;
}

function compatible(first, second) {
    return first === second;
}

longestCommonPrefix(["flower","flow","flight"]);