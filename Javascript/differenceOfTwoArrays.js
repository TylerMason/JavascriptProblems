/**
 * @param {number[1,2,3]} nums1
 * @param {number[2,4,6]} nums2
 * @return {number[][]}
 */
 var nums1 = [1,2,3]
 var nums2 = [2,4,6]


 var findDifference = function(nums1, nums2) {
    
    // var result = []
    // console.log("hello")
    // for(var i = 0; i < nums1.length; i++) {

    //     if (nums2.includes(nums1[i])) {

    //     }

    // }
    const set1 = new Set(nums1),
          set2 = new Set(nums2);

    nums1.forEach(set2.delete, set2);
    nums2.forEach(set1.delete, set1);

    return [[... set1], [... set2]]
         
};


console.log(findDifference(nums1, nums2))