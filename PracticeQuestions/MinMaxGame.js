// Leetcode 2293

function minMax(nums) {
  while (nums.length > 1) {
    newNums = [];
    for (let i = 0; i < nums.length / 2; i++) {
      if (i % 2 === 0) {
        newNums[i] = Math.min(nums[i*2], nums[i*2+1]);
      } else {
        newNums[i] = Math.max(nums[i*2], nums[i*2+1])
      }
    }
    nums = newNums;
  }
  return nums[0];
}

console.log(minMax([1,3,5,2,4,8,2,2]))