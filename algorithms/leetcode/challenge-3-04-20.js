/* eslint-disable */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let currentMax = 0;
  let globalMax = Infinity;
  
  for (let number of nums) {
    currentMax = Math.max(currentMax + number, number);
  
    globalMax = Math.max(globalMax, currentMax);
  }
  return globalMax
};

const params = [1]
const test = maxSubArray(params);
console.log(test);
