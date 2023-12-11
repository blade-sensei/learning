function minimumKits(totalKits, kitsStrength) {
  const chooseKits = [];
  let aliceTotalStrength = 0;
  let bobTotalStrength = 0;
  let kitIndex = 0;
  while (bobTotalStrength <= aliceTotalStrength) {
    aliceTotalStrength = sum(kitsStrength.slice(kitIndex + 1));
    const kit = kitsStrength[kitIndex];
    bobTotalStrength += kit;
    chooseKits.push(kit);
    kitIndex++;
  }
  return chooseKits.length;
}

function getVariableInArray(testInput) {
  const variables = testInput.split('\n');
  return variables;
}

function convertVariablesToIntegers(vars) {
  return vars.map((variable) => Number(variable));
}

function splitVariables(variables) {
  const [testCasesLength, ...testCasesVariables] = variables;
  return [testCasesLength, testCasesVariables];
}

console.log(minimumKits(5, [5, 3, 4, 1, 2]));

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
