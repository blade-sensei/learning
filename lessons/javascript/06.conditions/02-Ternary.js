/**
 * const result = condition
  ? trueExpression
  : falseExpression
 */

const score = 80;
let scoreRating;

if (score > 70) {
  scoreRating = 'Excellent';
} else {
  scoreRating = 'Do better';
}

console.log(scoreRating);

const scoreForm2 = 80;

const finalScore = scoreForm2 > 70 ? 'Excellent' : 'Do better';

console.log(finalScore);

// you can nest ternary inside another one
