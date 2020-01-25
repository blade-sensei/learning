/*
* @param {string} s
* @return {number}
*/
function romanToInt(s) {
    let totalInt = 0;
    const symbols = s.split('');
    const romanNumber = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const combinations = {
        'I': {
            'V': 4,
            'X': 9,
        },
        'X': {
            'L': 40,
            'C': 90,
        },
        'C': {
            'D': 400,
            'M': 900,
        }
    }

    for (let i = 0; i < symbols.length; i++) {
        const currentSymbol = symbols[i];
        let currentValue = 0;
        if (i === symbols.length - 1) {
            currentValue = romanNumber[currentSymbol];
        } else if (substractionValue([currentSymbol, symbols[i+1]], combinations)) {
            currentValue = substractionValue([currentSymbol, symbols[i+1]], combinations);
            i++;
        } else {
            currentValue = romanNumber[currentSymbol]
        }

        totalInt += currentValue;
    }
    return totalInt;
};

function substractionValue([first, second], combinations) {
    if (combinations[first] && combinations[first][second]) {
        return combinations[first][second]
    }
    return 0;
}

romanToInt("MCMXCIV");