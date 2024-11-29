// Input = [2,7,11,15], Target = 9
// Output = [0,1]

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

arr = [2, 7, 11, 15];
arr1 = [1, 3, 7, 9, 2];
target = 9;
target1 = 11;
console.log(twoSum(arr1, target1));
