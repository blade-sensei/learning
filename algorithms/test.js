function intersection1(nums1, nums2) {
    //convert to hashmap
    
    const map1 = new Set(nums1);
    const map2 = new Set(nums2);
    const returnMap = [];

    for (let num of map1) {
        if (map2.has(num)) {
            returnMap.push(num);
        }
    }
    return returnMap;
}

console.log(intersection1([4,9,5], [9,4,9,8,4]))