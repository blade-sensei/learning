const readline = require('readline');

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stout,
  terminal: false,
});


rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  run(input);
});

function run(input) {
  const numberOfTests = Number(input[0]);
  let currentIndex = 0;
  for (let i = 1; i <= numberOfTests; i++) {
    const testsIndiceArguments = currentIndex + i;
    const [pagesToFill, pagesLeft, rubles, books] = input[testsIndiceArguments].split(' ');
    const pagesNeeded = pagesToFill - pagesLeft;
    let isLucky = false;
    if (pagesNeeded > 0) {
      for (let i = 0; i < Number(books); i++) {
        const book = input[testsIndiceArguments + i + 1].split(' ');
        if (book[0] >= pagesNeeded && book[1] <= Number(rubles)) {
          isLucky = true;
          break;
        }
      }
    } else {
      isLucky = true;
    }
    if (isLucky) {
      console.log('LuckyChef');
    } else {
      console.log('UnluckyChef');
    }

    currentIndex += Number(books);
  }
}

function checkSubtaskExedLimit(somme, limit) {
  return somme > limit;
}

function convertNumber(array) {
  return array.map((e) => { return Number(e); });
}

function main(args) {
  const pagesNeeded = args.pagesToFill - args.pagesLeft;
  let isLucky = false;
  if (pagesNeeded > 0) {
    isLucky = isLuckyChef(args.booksInfo, pagesNeeded, args.rubles);
  }
  if (isLucky) {
    return 'LuckyChef';
  }
  return 'UnluckyChef';
}

function canBeSelected(book, pages, rubles) {
  return book[0] >= pages && book[1] <= rubles;
}

function isLuckyChef(books, pagesNeeded, rubles) {
  for (let i = 0; i < books.length; i++) {
    if (canBeSelected(books[i], pagesNeeded, rubles)) {
      return true;
    }
  }
  return false;
}

run(['3',
  '3 1 2 2',
  '3 4',
  '2 2',
  '3 1 2 2',
  '2 3',
  '2 3',
  '3 1 2 2',
  '1 1',
  '1 2']);
