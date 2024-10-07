// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// function removeDuplicates(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     // O(n)
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1); // O(1)
//       i--;
//     }
//   }
//   return nums.length;
// }

// Time Complexity => O(n)
// Space Complexity => O(1)

// without JS Methods
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  //   Two Pointers approach
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
// Time Complexity => O(n)
// Space Complexity => O(1)

// const nums = [1, 1, 2];
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
