/**
 Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 You need to return the highest scoring word as a string.
 If two words score the same, return the word that appears earliest in the original string.
 All letters will be lowercase and all inputs will be valid.
 */

    function high(x){
        const words = x.split(' ');

        let currentMaximalScoreWinner = {
            word: '',
            score: 0,
        }

        words.forEach(word => {
            const score = getWordScore(word);
            if (score > currentMaximalScoreWinner.score) {
                currentMaximalScoreWinner.score = score;
                currentMaximalScoreWinner.word = word;
            }
        })

        return currentMaximalScoreWinner.word;
    }

    function getWordScore(word) {
        //position in alphabet
        const letters = [...word];
        let totalScore = 0;
        letters.forEach(letter => {
            const score = letter.charCodeAt(0) - 96;
            totalScore = totalScore + score;
        })
        return totalScore;
    }

module.exports = {
    high,
}