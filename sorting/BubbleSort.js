// Q-1 Write a function to sort array nums in ascending order using Bubble Sort
// Input: nums = [29,10,14,37,14] -----> Output = [10,14,14,29,37]

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// Best Time Complexity => O(n)
// Worst Time Complexity => O(n^2)
// Avg Time Complexity => O((n/2)*n)
// Space Complexity => O(1)

console.log(bubbleSort([29, 10, 14, 37, 14]));
