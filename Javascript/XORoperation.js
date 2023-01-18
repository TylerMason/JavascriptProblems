/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    // given n, an integer. given start, also an integer.
    //DEFINE an array (nums) where nums[i] = start + 2 * i, and n == nums.length
    var nums = [start]
    for (var i = 0; i < n-1; i++) {
        nums.push(start + 2 * i)
    }
    return nums
};

// NOT DONE