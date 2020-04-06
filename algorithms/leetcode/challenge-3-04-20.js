/* eslint-disable */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let a1 = 0
  let a2 = nums[0]
  nums.forEach((i,a) => {
    a1 = Math.max(i, a1 + i)
    a2 = Math.max(a2, a1)
  })
  return a2
};

const params = [1, 100, 4, 15, 9, 30]
const test = maxSubArray(params);
console.log(test);
