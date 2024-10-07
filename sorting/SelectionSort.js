// Q-1 Write a function to sort array nums in ascending order using selection Sort
// Input: nums = [29,10,14,37,14] -----> Output = [10,14,14,29,37]

const selectionSort = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
};

// Time Complexity => O(n^2)
// Space Complexity => O(1)

console.log(selectionSort([29, 10, 14, 37, 14]));
