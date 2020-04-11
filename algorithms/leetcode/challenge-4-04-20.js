/* eslint-disable */
/**
 * Given an array nums, write a function to move all 0's to the end of
 * it while maintaining the relative order of the non-zero elements.``

 Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Requirements
- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.
 */

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeros = 0;
  nums.forEach(num => {
    if (num === 0) {
      zeros++;
    }
  });
  const ans = [];
  nums.forEach(num => {
    if (num !== 0) {
      ans.push(num);
    }
  });

  while(zeros > 0) {
    ans.push(0);
    zeros--;
  }
  
  ans.forEach((number, index) => nums[index] = number);
return nums;
};

const param = [0,1,0,3,12];
const test = moveZeroes(param);
console.log(test);

/**
 * We dont use a copy of nums. But we create others arrays then combine
 */