// This has 4 operations
// const funnyNumber = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     if (i === 3) return arr[i];
//   }
// };

// Single Operation => O(1) time complexity
const funnyNumber = (arr) => {
  return arr[3];
};

// const numbers = [123, 4, 56, 572, 364];
// console.time("Execution Time");
// console.log(funnyNumber(numbers));
// console.timeEnd("Execution Time");

function sumOperations(n) {
  // 3 operations for any input
  return (n * (n + 5)) / 2;
}

let x = 2;
// console.time("sumOperations");
// console.log(sumOperations(x));
// console.timeEnd("sumOperations");

function goingUpDown(n) {
  //operation depend on the input
  //   Time Complexity: 2n + 3 operations =>O(n)
  console.log("Going Forward");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the End Going Back");
  for (let j = n; j > 0; j--) {
    console.log(j);
  }
  console.log("At the Start");
}

// console.log(goingUpDown(5));

function printBoth(n) {
  // n * n or n^2 operations => Time Complexity O(n^2)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// console.log(printBoth(2));

// <=================  SPACE COMPLEXITY ================>

const spaceSum = (array) => {
  // O(1) Space Complexity
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

let number = [1, 5, 7, 8, 10, 12];
console.log(spaceSum(number));

const funnyNumberArray = (n) => {
  // O(n) space complexity
  const array = [];
  for (i = 0; i < n; i++) {
    array.push(i * 60);
  }
  return array;
};
console.log(funnyNumberArray(5));

// O(n^2) space Complexity
const createMatrix = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
};

const matrix = createMatrix(10);
console.log(matrix);
