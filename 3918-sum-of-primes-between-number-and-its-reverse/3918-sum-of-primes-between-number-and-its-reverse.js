/**
 * @param {number} n
 * @return {number}
 */
var sumOfPrimesInRange = function(n) {
    // 1. Number ka reverse nikalna
    const r = parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
    
    const start = Math.min(n, r);
    const end = Math.max(n, r);
    
    // 2. Prime check karne ke liye helper function
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    
    let sum = 0;
    
    // 3. Range mein saare primes ka sum nikalna
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    
    return sum;
};