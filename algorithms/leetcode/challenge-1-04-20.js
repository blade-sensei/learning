/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {}
  for (let number of nums) {
    if (map[number]) {
      map[number] = map[number] + 1;
    } else {
      map[number] = 1;
    }
  }

  for (let [occurrence, value] of Object.entries(map)) {
    if (value === 1) {
      return occurrence
    }
  }
  return 0
};

const inputs = [4,1,2,1,2];
const test = singleNumber(inputs);

console.log(test);