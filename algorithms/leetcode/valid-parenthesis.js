/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const pairs = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  const openedList = [];

  const parentheses = s.split('');

  for (symbol of parentheses) {
    if (isCloser(openedList[openedList.length - 1], symbol, pairs)) {
      openedList.pop();
    } else if (isOpener(symbol, pairs)) {
      openedList.push(symbol);
    } else {
      return false;
    }
  }

  return openedList.length === 0;
};


function isCloser(currentOpen, symbol, pairs) {
  const closer = pairs[currentOpen];
  return closer === symbol;
}

function isOpener(symbole, pairs) {
  const opener = pairs[symbole];
  return opener !== undefined;
}

isValid('([)]');
