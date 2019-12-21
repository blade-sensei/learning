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
    run(input);
})

function run(input) {
    const numberOfTests = Number(input[0])
    for (let i = 1; i <= numberOfTests; i++) {

        const string = input[i];
        const halfs = getHalfs(string);
        const comparator = checkLapindrome(halfs);
        if (comparator) {
            console.log('YES');
        } else {
            console.log('NO');
        }
        
    }

}

function isStringEven(string) {
    return string.length % 2 === 0;
}

function getHalfs(string) {
    const halfs = {};
    if (isStringEven(string)) {
        const cutIndex = string.length / 2;
        halfs.firstHalf = string.substring(0, cutIndex);
        halfs.secondHalf = string.substring(cutIndex);
    } else {
        const cutIndex = (string.length - 1) / 2;
        halfs.firstHalf = string.substring(0, cutIndex);
        halfs.secondHalf = string.substring(cutIndex + 1);
    }
    return halfs;
}

function checkLapindrome(halfs) {
    const mapper = {};
    for (letter of halfs.firstHalf) {
        if (mapper[letter]) {
            mapper[letter]++;
        } else {
            mapper[letter] = 1;
        }
    }

    for (letter of halfs.secondHalf) {
        if (mapper[letter]) {
            mapper[letter]--;
        } else {
            mapper[letter] = 1;
        }
    }

    const check = checkFreq(mapper);
    return check;
}

function checkFreq(mapper) {
    const letters = Object.values(mapper);
    if (letters.some(freq => freq !== 0)) {
        return false;
    }
    return true;
}

run([ '6', 'gaga', 'abcde', 'rotor', 'xyzxy', 'abbaab', 'ababc' ]);