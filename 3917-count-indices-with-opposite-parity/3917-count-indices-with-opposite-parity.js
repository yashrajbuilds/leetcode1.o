/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const n = nums.length;
    const answer = new Array(n);
    
    // Step 1: Count total even and odd numbers in the entire array
    let evenCount = 0;
    let oddCount = 0;
    for (let num of nums) {
        if (num % 2 === 0) evenCount++;
        else oddCount++;
    }

    // Step 2: Iterate through the array to calculate scores
    for (let i = 0; i < n; i++) {
        // Remove the current element from the remaining counts 
        // because we only care about elements to the right (j > i)
        if (nums[i] % 2 === 0) {
            evenCount--;
            // If current is even, the score is the number of odds to the right
            answer[i] = oddCount;
        } else {
            oddCount--;
            // If current is odd, the score is the number of evens to the right
            answer[i] = evenCount;
        }
    }

    return answer;
};