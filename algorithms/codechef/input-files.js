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
    const result = main(input);
    console.log(result);
})

function main(args) {
    const [n, k] = args[0].split(' ').map(param => Number(param));
    const testInputs = args.slice(1).map(param => Number(param));
    let counter = 0;
    for (let input of testInputs) {
        if (input % k === 0) {
            counter++;
        }
    }
    return counter;
}


main(['7 3', '1', '51', '966369', '7', '9', '999996', '11']);