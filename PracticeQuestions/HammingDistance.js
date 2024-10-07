// Given two strings x and y
// x = "hello", y = "hwllr"
// Output = 2
// Explanation
// (hello)
// (hwllr)
//   |  |

function hammingDistance(x, y) {
  if (x.length !== y.length) {
    throw new Error("The Strings must be of same length");
  }
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance += 1;
    }
  }
  return distance;
}

const x = "hello";
const y = "hwllr";

// console.log(hammingDistance(x, y));

// For Integers
function IntegerHammingDistance(x, y) {
  x = x.toString(2); //Converting to binary
  y = y.toString(2);

  while (x.length < y.length) {
    x = "0" + x;
  }
  while (y.length < x.length) {
    y = "0" + y;
  }

  let output = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      output += 1;
    }
  }

  return output;
}

const num1 = 1;
const num2 = 4;
console.log(IntegerHammingDistance(num1, num2));
