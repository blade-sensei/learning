

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map((str) => { return str.replace(/\s*$/, ''); });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  const listOfSum = [];
  const hourGlassList = getHourGlass(arr);

  for (const hourGlass of hourGlassList) {
    listOfSum.push(totalOfHourGlass(hourGlass));
  }
  console.log(listOfSum);
  return Math.max(...listOfSum);
}

function totalOfHourGlass(hourGlass) {
  let total = 0;
  for (const row of hourGlass) {
    const sum = row.reduce((sum, current, index) => {
      const toAdd = current;
      return sum + toAdd;
    });
    total += sum;
  }
  return total;
}

function getHourGlass(array) {
  const arrayOfHourGlass = [];

  for (let i = 0; i < 4; i++) {
    const hourGlassRow = [];
    for (let j = 0; j < 4; j++) {
      const hourGlassRow = [];
      hourGlassRow.push(
        array[i].slice(j, j + 3),
        [0, array[i + 1][j, j + 1], 0],
        array[i + 2].slice(j, j + 3),
      );
      arrayOfHourGlass.push(hourGlassRow);
    }
  }
  return arrayOfHourGlass;
  // return 16
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ')
      .map((arrTemp) => { return parseInt(arrTemp, 10); });
  }
  console.log(arr);
  const result = hourglassSum(arr);

  ws.write(`${result}\n`);

  ws.end();
}

/**
 * test input
 *
 *
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

expect 19
 */
