const readline = require('readline');

let input = [];

const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stout,
    terminal: false,
})



rl.on('line', (line) => {
    console.log('input: ', line);
    input.push(line);
})

rl.on('close', () => {
    main(input);
})

function main(args) {
    console.log('pararms : ', args );
    const params = args[0].split(' ').map(param => Number(param));
    console.log(params);
    const testInputs = args.slice(1);
    
    return 0;
}


main(['7 3', '1', '51', '966369', '7', '9', '999996', '11']);