/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFixedPoints = function(nums) {
    const n = nums.length;
    let candidates = [];

    for (let i = 0; i < n; i++) {
        let d = i - nums[i];
        if (d >= 0) {
            // Hum store kar rahe hain: [deletions_needed, value]
            candidates.push([d, nums[i]]);
        }
    }

    // Sort karein: pehle deletions (asc), phir values (asc)
    candidates.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    // BIT to store max fixed points for a given value
    // Max value nums mein n ho sakti hai
    let bit = new Array(n + 1).fill(0);

    const update = (idx, val) => {
        idx++; // 1-based index for BIT
        while (idx <= n) {
            bit[idx] = Math.max(bit[idx], val);
            idx += idx & -idx;
        }
    };

    const query = (idx) => {
        idx++;
        let res = 0;
        while (idx > 0) {
            res = Math.max(res, bit[idx]);
            idx -= idx & -idx;
        }
        return res;
    };

    let overallMax = 0;
    for (let i = 0; i < candidates.length; i++) {
        let [d, val] = candidates[i];
        
        // Hum pichle kisi bhi aise element se connect kar sakte hain 
        // jiski value 'val' se kam ho (kyunki deletions sorted hain)
        let currentMax = query(val - 1) + 1;
        
        update(val, currentMax);
        overallMax = Math.max(overallMax, currentMax);
    }

    return overallMax;
};