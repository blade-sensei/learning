/* eslint-disable */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentMax = 0;
  let globalMax = -Infinity
  
  for (let number of nums) {
    currentMax = Math.max(currentMax + number, 0);
    globalMax = Math.max(globalMax, currentMax);
    console.log('info ', currentMax, 'global ', globalMax)
  }
  return globalMax
};

const params = [-2, 10, 2, -30,  -13]
const test = maxSubArray(params);
console.log(test);

/**
 * if [-2, 10, 2, -12]
 * This implementation will remove negative sum_max sum of the current
 * max_sum. The logic behind this is that if we get negative, the next subarray (i+1, )
 * will be inevitably LESS if we keep this nagative max. 
 * for example. If we considered that the subarray to index 2 (2)..
 * the subarray from [1 to 2] has a total sum of 12. if we keep the previous max_sum ( here -2). 
 * this will be LESS that 12. from 0 to 2 --> 10 from 1 to 2 --> 12. 
 * So if we find a max_sum_current negative. the NEXT max_sum_current will be affected and be inevitably 
 * less. So to dont keep to consider the negative sum, to set 0 max_sum. This way the next
 * sum will start another sequence of sums.
 */

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
