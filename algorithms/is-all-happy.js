let = T;

for (let i = 0; i < T; i++) {
    let 
}

function isAllHappy(elephantsNumber, candies) {
    let minumumCandies = 0
    for (let i = 0; i < elephantsNumber; i++) {
        minumumCandies += i;
    }
    if (candies < minumumCandies) {
        return 'No'
    }
    return 'Yes'
}

console.log(isAllHappy(2, 3));
console.log(isAllHappy(5, 5));
