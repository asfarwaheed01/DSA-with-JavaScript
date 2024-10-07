function asfar() {
  return ali();
}
function ali() {
  return zain();
}
function zain() {
  return mohsin();
}
function mohsin() {
  return final();
}
function final() {
  //base case
  return false;
}

// console.log(asfar());

function goToLunch(person) {
  if (person === 5) return true;
  console.log(person);
  return goToLunch(person + 1);
}

// console.log("Outcome:", goToLunch(1));

// Loop vs Recurrsion

// function multiply(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product = product *= arr[i];
//   }
//   return product;
// }

function multiply(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  } else {
    return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
  }
}

// console.log(multiply([1, 2, 3, 4, 5]));

function factorial(num) {
  console.log(num);
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// console.log(factorial(3));

// range of numbers
// Return an array with the range of numbers
// Input start = 1, end = 5 -----> Output:

function rangeOfNum(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNum(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNum(1, 5));
