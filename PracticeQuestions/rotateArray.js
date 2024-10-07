// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// function rotateArray(arr, k) {
//   let size = arr.length;
//   if (k > size) {
//     k = k % size;
//   }
//   const rotated = arr.splice(size - k, size); // O(n)
//   arr.unshift(...rotated); // used the spread operation to make this a part of previous array

//   return arr;
// }

// Time Complexity = O(n)

function rotateArrayOptimized(arr, k) {
  const size = arr.length;
  if (k > size) {
    k = k % size;
  }
  reverse(arr, 0, arr.length - 1); // O(n)
  reverse(arr, 0, k - 1); // O(k)
  reverse(arr, k, arr.length - 1); // O(n-k)
  return arr;
}

// Time Complexity => O(n)
// Space Complexity => O(1)

// This function will reverse the array
function reverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 1;
const rotated = rotateArrayOptimized(nums, k);
console.log(rotated);
