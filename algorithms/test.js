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
        const [pagesToFill, pagesLeft, rubles, books] = input[testsIndiceArguments].split(' ');


        const args = {
            pagesToFill,
            pagesLeft,
            rubles,
            books
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

function convertNumber(array) {
    return array.map(e => Number(e));
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