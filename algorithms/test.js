/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let benefits = [];
    let currentDayToBuy = 0;
    while(!isDayToBuyExceed(currentDayToBuy, prices.length)) {
        const dayToBuy = currentDayToBuy;
        const bestDayToSell = getBenefitDay(dayToBuy, prices);
        const benefit = getBenefit(dayToBuy, bestDayToSell, prices);
        benefits.push(benefit);
        console.error(benefits);
        currentDayToBuy = bestDayToSell + 1;
        
    }
    return sumBenefits(benefits);
    
};

function getBestDayToBuy(start, prices) {
    let bestDayToBuy = start;
    let min = prices[start];
    for (let i = start + 1; i <= prices.length -1; i++) {
        if (prices[i] <= min) {
            min = prices[i];
            bestDayToBuy = i;
        }
    }
    return bestDayToBuy;
    
}

function sumBenefits(benefits) {
    return benefits.reduce((first, second) => first + second, 0);
}

function getBenefit(dayToBuy, dayToSell, remainDays) {
    return remainDays[dayToSell] - remainDays[dayToBuy];
}

function isDayToBuyExceed(noDay, noDays) {
    return  (noDay >= noDays - 1)
}

function getBenefitDay(start, prices) {
    let bestDayToSell = start;
    let max = prices[start];
    for (let i = start + 1; i <= prices.length - 1; i++ ) {
        if (prices[i] < max) {
            return bestDayToSell;
        }
        max = prices[i]
        bestDayToSell = i;

    }
    return bestDayToSell;
}

const test = [2,4,1];
console.log(maxProfit(test));