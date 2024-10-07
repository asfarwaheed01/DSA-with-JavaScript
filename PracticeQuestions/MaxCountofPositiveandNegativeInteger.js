// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
// Example 1:
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

function maximumCount(nums) {
  return Math.max(upperBound(nums), lowerBound(nums));
}
function upperBound(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);
    if (nums[mid] < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return nums[0] >= 0 ? 0 : low;
}
function lowerBound(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > 0) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
