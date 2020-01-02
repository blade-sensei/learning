
function intersection(nums1, nums2) {
    //convert to hashmap
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
    return Object.keys(map).map(number => Number(number));
}

// thiis is time complexity  a*b cause nums2 iterates over nums1 iteration
// we use hashmap to save intersection founded, if we use array to save
// in the if check condition to know if a value is already saved we need it to iterate
// so it add O(n) search


console.log(intersection([4,9,5], [9,4,9,8,4]))
//result [9,4]
// accepted  72ms 35.6MB

