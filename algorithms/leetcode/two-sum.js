const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return [];
};

/**
* [2, 7, 11, 15, 12]
*
*/


/**
* This solution has time complexity of O(n) vs O(n^2)
* We also need to sub to get complement if we use sum we need
* know before both value to get target.
* We use hash map to get complement
* @param {} nums
* @param {*} target
*/
const twoSumHash = function (nums, target) {
  // hash map
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    map[value] = i;
  }

  // iteration
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const hashComplement = map[complement];

    if (hashComplement && hashComplement !== i) {
      return [i, hashComplement];
    }
  }

  return [];
};

twoSumHash([2, 7, 11, 15, 12], 9);
