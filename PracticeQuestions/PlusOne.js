// leetcode 66
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

var plusOne = function(digits) {
    let carry = 1;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        if (sum === 10) {
            digits[i] = 0;  
        } else {
            digits[i] = sum;  
            carry = 0; 
            break;
        }
    }
    
    if (carry > 0) {
        digits.unshift(1);
    }
    
    return digits;
};

console.log(plusOne([1,2,3]))