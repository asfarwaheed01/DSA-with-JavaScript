// Q-1 Write a function to sort array nums in ascending order using insertion Sort
// Input: nums = [29,10,14,37,14,33,8,11] -----> Output = [8,10,11,14,14,29,33,37]

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Best Time Complexity => O(n)
// Worst Time Complexity => O(n^2)
// Avg Time Complexity => O((n^2)
// Space Complexity => O(1)

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));
