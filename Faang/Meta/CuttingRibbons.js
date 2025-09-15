// Given a large pile of wood blocks of varing length, whats the largest cut lenght m that can products k m-blocks:

// [15,10,7], k=8

// output: 3

function largestCut(arr, k) {
  if (arr.length === 0 || k === 0) return;
  let sums = [];
  for (let i = 0; i <= k; i++) {
    let sum = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
      sum += Math.floor(arr[j] / (i + 1));
    }
    if (sum > k) {
      sums.push(i + 1);
    }
  }
  return sums[sums.length - 1];
}

const lens = [15, 10, 7];
const k = 8;
console.log(largestCut(lens, k));

// Best Way
// what you have the upper bound and the lower bounds for iterations binary search is the best option

function largestCut(arr, k) {
  if (arr.length === 0 || k === 0) return 0;

  let left = 1,
    right = Math.max(...arr);
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // count how many blocks of length mid
    let total = 0;
    for (let len of arr) {
      total += Math.floor(len / mid);
    }

    if (total >= k) {
      // mid works, try bigger
      result = mid;
      left = mid + 1;
    } else {
      // mid too big, try smaller
      right = mid - 1;
    }
  }

  return result;
}

const lens2 = [15, 10, 7];
const k2 = 8;
console.log(largestCut(lens2, k2)); // 3
