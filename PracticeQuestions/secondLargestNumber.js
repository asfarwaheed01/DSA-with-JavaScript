// Q-1 Second Largest Number
// Given an array print the 2nd largest number
// Input = [12,35,1,10,34,1] ====> Output = 34
// Input = [10,5,10] ====> Output = 5

// function secondLargestNumber(n) {
//   const newArr = n.sort((a, b) => b - a);
//   const largest = newArr[0];
//   for (let i = 1; i < newArr.length; i++) {
//     if (newArr[i] !== largest) {
//       return newArr[i];
//     }
//   }
//   return undefined;
// }

// We can make a set for this. A set has no repeating elements
// function secondLargestNumber(n) {
//   const uniqueArr = Array.from(new Set(n)); //converting set to an array O(n) time complexity
//   if (uniqueArr.length === 1) {
//     return "Invalid List";
//   }
//   const sortedArr = uniqueArr.sort((a, b) => a - b); // O(nlogn)
//   secondIndex = sortedArr.length - 2;
//   return sortedArr[secondIndex];
// }

// Time complexity = O(nlogn)

// Other Approach
function secondLargestNumberOptimized(n) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n.length; i++) {
    // O(n)
    if (n[i] > largest) {
      secondLargest = largest;
      largest = n[i];
    } else if (n[i] != largest && n[i] > secondLargest) {
      secondLargest = n[i];
    }
  }
  return secondLargest;
}

// Time Complexity = O(n)
// Space complexity = O(1) as it is taking an array and input and just returning 1 value in the output

// const arr = [12, 35, 1, 10, 34, 1];
// const arr = [1];
const arr = [10, 5, 10];
console.log(secondLargestNumberOptimized(arr));
