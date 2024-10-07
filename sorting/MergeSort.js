// Implement Merge Sort in JS
// write a function to sort nums array in ascending order
// Input:=> [8,3,5,4,7,6,1,2] , Output=> [1,2,3,4,5,6,7,8]

function mergeSort(arr) {
  // O(logn)
  // Base Cast
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Time Complexity => O(nlogn)
// Space Complexity => O(n)

function merge(left, right) {
  //0(n)
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
