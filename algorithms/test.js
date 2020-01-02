function intersection1(nums1, nums2) {
    //convert to hashmap
    const map = {};
    const returnMap = {};
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
    return Object.keys(returnMap).map(number => Number(number));
}

console.log(intersection1([1], [1]))

