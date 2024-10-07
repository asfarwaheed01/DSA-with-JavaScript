// Ques-6 Subsets - Back tracking Algorithm using Recursion
// Given an integer array of n elements return all the possible subsets (the power set)
// The solution must not contain duplicate Subsets
// Input: [1,2,3] -----> Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0] ------> Output: [[],[0]]

function subsets(nums) {
  let result = [];
  let temp = [];
  function recursiveSubsets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }
  recursiveSubsets(nums, 0);
  return result;
}

const nums = [1, 2, 3];
console.log(subsets(nums));
