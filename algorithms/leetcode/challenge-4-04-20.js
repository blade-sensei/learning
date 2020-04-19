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
  let pointer = 0;

  console.log(nums);
  for (let num of nums) {
    if (num !== 0) {
      nums[pointer] = num;
      pointer++;
    }
  }

  for (let i = pointer; i < nums.length; i++) {
    nums[i] = 0;
  }
  

return nums;
};


const param = [0,1,0,3,12];
const test = moveZeroes(param);
console.log(test);

/**
 * We dont use a copy of nums. But we create others arrays then combine
 */