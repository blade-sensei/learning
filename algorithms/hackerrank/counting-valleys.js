'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

const StepDirectionLevel = {
    'D': -1,
    'U': 1
}

function isValidDirection(direction) {
    return direction === 'U' || direction === 'D';
}

function stepDirectionFailsContraints(stepsDirections) {
    return !stepsDirections.every(isValidDirection);
}

function countingValleys(steps, path) {
    let hasStartedMountainOrValley = false;
    const seeLevel = 0;
    let previousLevelRegardingSeeLevel = 0;
    const isBellowSeeLevel = false;
    let totalOfValleyCrossed = 0;

    for (let stepIndex = 0; stepIndex < steps; stepIndex++) {
        const currentStepDirection = path.charAt(stepIndex);
        const currentLevelRegardingSeeLevel = getPathLevelRegardingSeeLevel
            (previousLevelRegardingSeeLevel, currentStepDirection);

        if (!hasStartedMountainOrValley && currentLevelRegardingSeeLevel === -1) {
            hasStartedMountainOrValley = true;
        }
        else if (hasStartedMountainOrValley
            && hasFinishedMontainOrValley(currentLevelRegardingSeeLevel)) {
            console.log('has finished: ', currentLevelRegardingSeeLevel);
            totalOfValleyCrossed++
            hasStartedMountainOrValley = false;
        }
        console.log('currentStep: ', currentLevelRegardingSeeLevel);


        previousLevelRegardingSeeLevel = currentLevelRegardingSeeLevel;
    }
    console.log('total: ', totalOfValleyCrossed);
    return totalOfValleyCrossed;
}

function hasFinishedMontainOrValley(currentLevel) {
    return currentLevel === 0;
}

function isBellowSee(currentLevel) {
    console.log('was valley: ', currentLevel);
    console.log('was valley: ', currentLevel < 0);
    return currentLevel < 0;
}

function getStepsDirections(pathString) {
    return pathString.split('');
}

function getPathLevelRegardingSeeLevel(currentLevel, stepDirection) {
    const stepDirectionLevel = StepDirectionLevel[stepDirection];
    return currentLevel + stepDirectionLevel;
}

function isBellowSeeLevel() {

}

function isAboveSeeLevel() {

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
