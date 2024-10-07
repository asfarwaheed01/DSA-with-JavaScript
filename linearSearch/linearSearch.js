// Implement linear search in javaScript
// write a function to search "target" in nums. If the target exists return 1 otherwise return -1 and the time complexity O(n).

// Input: [4,5,6,7,0,1,2], Target = 0 => Output: 4
// Input: [4,5,6,7,0,1,2], Target = 3 => Output: -1

const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
};

// Time Complexity -> O(n)
// Space Complexity -> O(1)

console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 3));

// Global linear search
const globalLinearSearch = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  if (result.lenght === 0) return -1;
  return result;
};

// Time Complexity -> O(n)
// Space Complexity -> O(n)

console.log(globalLinearSearch([4, 5, 6, 6, 7, 0, 1, 2], 6));
