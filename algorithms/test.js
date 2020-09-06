/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 */
var singleNumber = function(nums) {
    let found = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (found.includes(nums[i])) {
            found = found.filter((num) => num !== nums[i]);
        } else {
            found.push(nums[i]);
        }
    }
    console.log(found[0]);
    return found[0]
};