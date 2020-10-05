function minimumKits(totalKits, kitsStrength) {
    const chooseKits = [];
    let aliceTotalStrength = 0;
    let bobTotalStrength = 0;
    let kitIndex = 0;
    while (bobTotalStrength <= aliceTotalStrength) {
        aliceTotalStrength = sum(kitsStrength.slice(kitIndex + 1));
        const kit = kitsStrength[kitIndex];
        bobTotalStrength = bobTotalStrength + kit;
        chooseKits.push(kit);
        kitIndex++;

    }
    return chooseKits.length;
}


function getVariableInArray(testInput) {
    const variables = testInput.split('\n');
    return variables;
}

function convertVariablesToIntegers(variables) {
    return variables.map((variable) => Number(variable));
}

function splitVariables(variables) {
    const [testCasesLength, ...testCasesVariables] = variables;
    return [testCasesLength, testCasesVariables];
}

console.log(minimumKits(5, [5, 3, 4, 1, 2]));

function sum (kits) { 
    return kits.reduce( (a, b)  => {
    return a + b;
}, 0);
}
