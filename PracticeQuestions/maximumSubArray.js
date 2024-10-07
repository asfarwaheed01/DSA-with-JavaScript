// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Note an array can be its own subarray

// function maxSubArray(params) {
//   let maxSum = nums[0];
//   let startIndex = 0;
//   let endIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     // TC = O(n)
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       // TC = O(n)
//       currentSum = currentSum + nums[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIndex = i;
//         endIndex = j;
//       }
//     }
//   }
//   return { sum: maxSum, subArray: nums.slice(startIndex, endIndex + 1) };
// }

// Time Complexity = O(n^2)
// Space Complexity = O(1)

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums2 = [4, -1, 2, 1];
// console.log(maxSubArray(nums));

// Kadane's Algorithm

function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum = sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

// Time Complexity = O(n)
// Space Complexity = O(1)

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [4, -1, 2, 1];
console.log(maxSubArray(nums2));
