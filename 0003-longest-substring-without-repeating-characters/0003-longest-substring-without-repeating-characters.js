/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the character was seen and is within the current window, move the left pointer
        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            left = charMap.get(currentChar) + 1;
        }

        // Store or update the last seen index of the character
        charMap.set(currentChar, right);

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};