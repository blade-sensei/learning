/* eslint-disable */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentMax = 0;
  let globalMax = -Infinity
  
  for (let number of nums) {
    currentMax = currentMax + number;
    globalMax = Math.max(globalMax, currentMax);
    currentMax = Math.max(currentMax, 0);
  }
  return globalMax
};

const params = [3]
const test = maxSubArray(params);
console.log(test);

/**
 * summary
 * 
 * another to be sure the first iteration/smallest subarray 
 * will not be wrong by compare globalMax = 0 and currentMax a negative number
 * we should make sure that currentMax will not be negative
 * To do that modify currentMax by
 * currentMax = Math.max(currentMax + number, 0) -> If currentMax + number is negative
 * the crrentMax set will prefer 0.
 * 
 */
