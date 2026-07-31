/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    // 1. Count frequencies of each character
    const freq = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        freq[word.charCodeAt(i) - 97]++;
    }

    // 2. Sort frequencies in descending order
    freq.sort((a, b) => b - a);

    let totalPushes = 0;

    // 3. Calculate total pushes based on frequency rank
    for (let i = 0; i < 26; i++) {
        if (freq[i] === 0) break; // No more characters left
        
        // Math.floor(i / 8) + 1 gives 1 for first 8, 2 for next 8, etc.
        const pushesPerChar = Math.floor(i / 8) + 1;
        totalPushes += freq[i] * pushesPerChar;
    }

    return totalPushes;
};