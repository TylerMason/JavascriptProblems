/**
 * The knows API is defined in the parent class VersionControl.
 *     func isBadVersion(_ version: Int) -> Bool{}
 */

class Solution : VersionControl {
    func firstBadVersion(_ n: Int) -> Int {
        // n must be the size of the amount of versions?
        var start = 1
        var end = n
        
        while (start < end) {
            // why are we trying to get like a random value?
            var num = (start + end) / 2
            if (isBadVersion(num)) {
                end = num
            }
            else {
                start = num + 1
            }
        }
        return end
    }
}