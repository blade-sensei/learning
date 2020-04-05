/** ****

 Each letter of a word scores points according to its position in
 the alphabet: a = 1, b = 2, c = 3 etc.

 You need to return the highest scoring word as a string.
 If two words score the same, return the word that appears earliest in the original string.
 All letters will be lowercase and all inputs will be valid.

 ***** */
const test = require('ava');

function high(x) {
  const words = x.split(' ');

  const currentMaximalScoreWinner = {
    word: '',
    score: 0,
  };

  words.forEach((word) => {
    const score = getWordScore(word);
    if (score > currentMaximalScoreWinner.score) {
      currentMaximalScoreWinner.score = score;
      currentMaximalScoreWinner.word = word;
    }
  });

  return currentMaximalScoreWinner.word;
}

function getWordScore(word) {
  // position in alphabet
  const letters = [...word];
  let totalScore = 0;
  letters.forEach((letter) => {
    const score = letter.charCodeAt(0) - 96;
    totalScore += score;
  });
  return totalScore;
}

test('high_score_string', (t) => {
  t.is(high('man i need a taxi up to ubud'), 'taxi');
  t.is(high('what time are we climbing up the volcano'), 'volcano');
  t.is(high('take me to semynak'), 'semynak');
});
