/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const alreadyFind = [];
  if (n <= 0) return false;
    let numberToCheck = n;
    while (numberToCheck !== 1) {
      let numberString = numberToCheck.toString();
      numberString = numberString.split('');
      numberString = numberString.map((number) => {
        return Math.pow(Number(number), 2);
      });
      numberToCheck = numberString.reduce((p, c) => p + c);
      if (alreadyFind.includes(numberToCheck)) {
        return false;
      } else {
        alreadyFind.push(numberToCheck);
      }
      console.log(numberToCheck, alreadyFind)

    }
    return true;
};

const inputs = 2;
const test = isHappy(inputs);

console.log(test);