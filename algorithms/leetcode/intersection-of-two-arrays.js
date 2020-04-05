
function intersection(nums1, nums2) {
  // convert to hashmap
  const map = {};
  //

  for (let i = 0; i < nums1.length; i++) {
    const value = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      const secondArrayValue = nums2[j];
      if (value === secondArrayValue && !map[secondArrayValue]) {
        map[secondArrayValue] = j;
      }
    }
  }
  return Object.keys(map).map((number) => { return Number(number); });
}

// thiis is time complexity  a*b cause nums2 iterates over nums1 iteration
// we use hashmap to save intersection founded, if we use array to save
// in the if check condition to know if a value is already saved we need it to iterate
// so it add O(n) search


console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// result [9,4]
// accepted  72ms 35.6MB

function intersection1(nums1, nums2) {
  // convert to hashmap
  const map = {};
  let returnMap = {};
  for (let i = 0; i < nums2.length; i++) {
    map[nums2[i]] = i;
  }
  //
  for (let i = 0; i < nums1.length; i++) {
    const value = nums1[i];
    const valueFind = map[value];
    if (!(valueFind === undefined) && !returnMap[value]) {
      returnMap[value] = i;
    }
  }
  returnMap = Object.keys(returnMap);
  return returnMap.map((number) => { return Number(number); });
}

function intersection2(nums1, nums2) {
  // use set to delete repeated
  // so at the end of the function we dont need to check for repeated
  // values in our return array
  const map1 = new Set(nums1);
  const map2 = new Set(nums2);
  const returnMap = [];

  for (const num of map1) {
    if (map2.has(num)) {
      returnMap.push(num);
    }
  }
  return returnMap;
}

console.log(intersection1([4, 9, 5], [9, 4, 9, 8, 4]));
