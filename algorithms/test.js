const readline = require('readline');

let input = [];

const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stout,
    terminal: false,
})



rl.on('line', (line) => {
    input.push(line);
})

rl.on('close', () => {
    const result = run(input);
})

function run(input) {
    const numberOfTests = Number(input[0])
    let currentIndex = 0;

    for (let i = 1; i <= numberOfTests; i++) {

        const testsIndiceArguments = currentIndex + i;
        const [pagesToFill, pagesLeft, rubles, books] = convertNumber(input[testsIndiceArguments].split(' '))

        const args = {
            pagesToFill,
            pagesLeft,
            rubles,
            books,
        }
        const pagesNeeded = args.pagesToFill - args.pagesLeft;
        let isLucky = false;
        if (pagesNeeded > 0) {
            for (let i = 0; i < books; i++) {
                let book = input[testsIndiceArguments + i + 1].split(' ');
                if (canBeSelected(book, pagesNeeded, rubles)) {
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

    return 0;
}

function checkSubtaskExedLimit(somme, limit) {
    return somme > limit;
}

function convertNumber(array) {
    return array.map(e => Number(e));
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
