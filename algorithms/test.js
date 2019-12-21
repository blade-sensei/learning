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
    let currentIndex = 1;

    for (let i = 1; i <= numberOfTests; i++) {

        const testsIndice = currentIndex + 1;
        const [pagesToFill, pagesLeft, rubles, books] = convertNumber(input[currentIndex].split(' '))
        let booksInfo = input.slice(testsIndice, testsIndice+books).map(info => info.split(' '));
        booksInfo = booksInfo.map(bookInfo => convertNumber(bookInfo));

        const args = {
            pagesToFill,
            pagesLeft,
            rubles,
            books,
            booksInfo
        }
        console.log(main(args));

        currentIndex += books + 1;
        
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
    const result = args.booksInfo.some(book => {
        return canBeSelected(book, pagesNeeded, args.rubles);
    })

    if (result) {
        return 'LuckyChef';
    }

    return 'UnluckyChef';
}

function canBeSelected(book, pages, rubles) {
    return book[0] >= pages && book[1] <= rubles;
}

run([ '3',
'3 1 2 2',
'3 4',
'2 2',
'3 1 2 2',
'2 3',
'2 3',
'3 1 2 2',
'1 1',
'1 2' ]);