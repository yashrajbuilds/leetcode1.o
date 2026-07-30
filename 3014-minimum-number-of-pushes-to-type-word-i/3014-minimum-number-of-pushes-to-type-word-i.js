/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let n = word.length;
    let pushes = 0;
    
    for (let i = 0; i < n; i++) {
        // Math.floor(i / 8) gives 0 for 0-7, 1 for 8-15, 2 for 16-23, etc.
        pushes += Math.floor(i / 8) + 1;
    }
    
    return pushes;
};