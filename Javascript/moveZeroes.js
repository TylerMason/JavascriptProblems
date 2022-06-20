/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


 var moveZeroes = function(nums) {
    // this is to keep of the length of the entire array so we do not end up in an infitnite loop
    let count = 0

    // the nums.length-count basically just counts down for us.
    for (var i = 0; i < nums.length-count; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            nums.push(0)
            count++
            i--
        }
    }
    
    return nums;
};

moveZeroes([0,0,1])

/*
We just want to manipulate the input array to put the zeroes at the end
The other non zero numbers will stay in the same order
*/