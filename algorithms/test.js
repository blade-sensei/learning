
/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 */
var containsDuplicate = function(nums) {
    const sorted = nums.sort((a,b) => a-b);
    for (let i = 1; i < sorted.length; i++ ) {
        if (sorted[i] === sorted[i-1]) {
            return true;
        }
    }
    return false;
};