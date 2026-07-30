/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    // Base case: S1 is "0"
    if (n === 1) return '0';
    
    let length = (1 << n) - 1;       // 2^n - 1
    let mid = Math.floor(length / 2) + 1; // 2^(n-1)
    
    if (k === mid) {
        return '1';
    } else if (k < mid) {
        // If k is in the left half, it's the same bit as in S_(n-1)
        return findKthBit(n - 1, k);
    } else {
        // If k is in the right half, find its mirrored position in S_(n-1)
        // and invert the result ('0' <-> '1')
        let mirroredK = length - k + 1;
        let bit = findKthBit(n - 1, mirroredK);
        return bit === '0' ? '1' : '0';
    }
};