/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let r = 0;
    while (r < k) {
        const lastNum = nums[nums.length - 1];
        let previous = nums[0];
        for (let internalIndex = 1; internalIndex < nums.length; internalIndex++ ) {
            const current = nums[internalIndex];
            nums[internalIndex] = previous;
            previous = current;
        }
        nums[0] = lastNum;
        r++;
    }
};