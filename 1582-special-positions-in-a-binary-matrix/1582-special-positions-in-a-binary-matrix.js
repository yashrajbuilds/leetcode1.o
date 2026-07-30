/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    
    let rowSum = new Array(m).fill(0);
    let colSum = new Array(n).fill(0);
    
    // Step 1: Calculate row and column sums
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] === 1) {
                rowSum[r]++;
                colSum[c]++;
            }
        }
    }
    
    // Step 2: Count special positions
    let specialCount = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] === 1 && rowSum[r] === 1 && colSum[c] === 1) {
                specialCount++;
            }
        }
    }
    
    return specialCount;
};