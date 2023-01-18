/**
 * @param {number[]} forts
 * @return {number}
 */
 var captureForts = function(forts) {
    // given an array where -1 is no fort, 0 is an enemy fort, and 1 is an ally fort.
    let max = 0, prev = 0;
    forts.forEach((fort, idx) => {
        if (fort) { // either a -1, 0, or 1
            // if fort[prev] is true (or 1) AND fort (1,0,or-1) is false
            if (forts[prev] && fort != forts[prev]) {
                max = Math.max(max, (idx - prev - 1))
            }
            prev = idx;
        }
    })
    return max;

    // need to walk through and debug
    
};