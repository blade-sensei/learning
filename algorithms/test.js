var twoSum = function(nums, target) {

  for (let i = 0; i < nums.length; i++) {
    const restOfArray = nums.slice(i, nums.length + 1);
    for (let j = 0; j < restOfArray.length; j++) {
      const sum = nums[i] + restOfArray[j];
      if (restOfArray[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

