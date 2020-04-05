/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  const { length } = s;
  const limit = getLimit(length);

  for (let i = 0; i < limit; i++) {
    const tempo = s[i];
    const reverseIndex = length - 1 - i;
    s[i] = s[reverseIndex];
    s[reverseIndex] = tempo;
  }
  return s;
};

function even(number) {
  return number % 2 === 0;
}

function getLimit(length) {
  if (even(length)) {
    return length / 2;
  }
  return Math.round(length / 2);
}

reverseString(['h', 'e', 'l', 'l', 'o']);
