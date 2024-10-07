// Implement Quick Sort in JavaScript
// arr = []

function qS(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...qS(left), pivot, ...qS(right)];
}

// Time Complexity:
// Average Case: O(nlogn)
// Worst Case: O(n^2)
// Best Case: O(nlogn)

// Space Complexity
// Avergae Case: O(log n)
// Worst Case: O(n)
console.log(qS([5, 3, 2, 6, 9, 1, 8]));
