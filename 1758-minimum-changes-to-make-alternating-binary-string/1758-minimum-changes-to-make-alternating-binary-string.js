/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let count0 = 0; // Cost to match "010101..."
    
    for (let i = 0; i < s.length; i++) {
        // Expected character at index i for pattern starting with '0'
        let expected = (i % 2 === 0) ? '0' : '1';
        
        if (s[i] !== expected) {
            count0++;
        }
    }
    
    // Cost to match "101010..." is (s.length - count0)
    return Math.min(count0, s.length - count0);
};