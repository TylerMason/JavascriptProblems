


/* 
Given an integer array nums and an integer k, modify the array in the following way:

choose an index i and replace nums[i] with -nums[i].
You should apply this process exactly k times. You may choose the same index i multiple times.

Return the largest possible sum of the array after modifying it in this way.

 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    var sum = 0
    // needed a comparator because negative numbers are sorted by the integer value and not by the "lower" negative
    // [2,-3,-1,5,-4] would be [-1,-3,-4,2,5] without the comparator "(a,b) => {return a - b}"
    nums.sort((a,b) => {return a - b})
    for (var i = 0; i < k; i++) {
        if (nums[i] >= 0) break 
        nums[i] = -nums[i]
    }
    sum = nums.reduce((accumulator, curr) => accumulator + curr)
    return sum
};

if (largestSumAfterKNegations([4,2,3], 1) == 5) console.log(true)
if (largestSumAfterKNegations([3,-1,0,2], 3) == 6) console.log(true)
if (largestSumAfterKNegations([2,-3,-1,5,-4], 2) == 13) console.log(true)
if (largestSumAfterKNegations([-2,9,9,8,4], 5) == 13) console.log(true)

