const readline = require('readline');

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stout,
  terminal: false,
});


rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const result = main(input);
});

function main(input) {
  const numberOfTests = Number(input[0]);
  for (let i = 1; i < input.length; i += 2) {
    const [n, c] = input[i].split(' ').map((number) => { return Number(number); });
    const candiesForEachElephant = input[i + 1].split(' ').map((number) => { return Number(number); });
    console.log(isHappy(c, candiesForEachElephant));
  }
}

function isHappy(candies, list) {
  const sum = list.reduce((acc, current) => { return acc + current; });
  if (candies < sum) {
    return 'No';
  }
  return 'Yes';
}
