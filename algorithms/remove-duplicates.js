// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let globalIndex = 0;
  while(hasDuplicates(nums)) {
      const startIndexDuplicates = globalIndex;
      const uniqueValue = nums[globalIndex];
      
      while(isNextTheSame(uniqueValue, startIndexDuplicates, nums)) {
          nums.splice(startIndexDuplicates + 1, 1);
      }
      
      globalIndex++;
  }
  return nums.length;
};

function isNextTheSame(value, startIndex, nums) {
  return (nums[startIndex + 1] === value)
}

function hasDuplicates(nums) {
  for (let numIndex = 0; numIndex < nums.length - 1; numIndex++) {
      if (nums[numIndex] === nums[numIndex + 1]) return true;
  }
  return false;
}