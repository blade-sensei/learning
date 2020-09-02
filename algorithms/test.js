function reductionCost(num) {
    if (num < 2 || num.length > 2**50) return 0;
    let totalCost = [];

    let numbers = [...num];
    const number = 0;
    while(numbers.length > 1) {
        numbers = sortingAscending(numbers);
        const cost = numbers[number] + numbers[number+1];
        totalCost.push(cost);
        numbers[number+1] = cost;
        numbers.shift();
    }

    return sum(totalCost);
}

function sortingAscending(array) {
    return array.sort((first, second) => first-second);
}

function sum(array) {
    return array.reduce((a, b)=> a + b, 0);
}
///



const test = [2, 1, 8, 5] ;


console.log(reductionCost(test));
console.log('test');