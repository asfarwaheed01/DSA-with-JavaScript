// Arrays Declaration
let num = new Array();
let person = {
  name: "Asfar",
  age: 23,
};
let arr = ["apple", "banana", "cherry", person];
// console.log(arr[3]);
// console.log(arr[3].name);
// console.log(arr.length);

// Methods to add and remove elements from an array
arr.push("orange"); //Adds at the end of array
// console.log(arr);

arr.pop(); //Removes the last element of an array

// Add to the top of the array
arr.unshift("new");

// Removes from the top of the array
arr.shift();
// console.log(arr);

// NOTE ====> Push and Pop are more performant than unshift an shift so with large arrays use push and pop

// ======> LOOPS
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let i = 0;
while (i < arr.length) {
  //   console.log(arr[i]);
  i++;
}

// ======> inbuilt Loop methods which are way more powerful
const numbers = [1, 2, 3, 4, 5];
// map returns an entirely new array

const newNums = numbers.map((item, index, array) => {
  //   console.log(item, index, array);
  return item + 5;
});

// Only return the ones which satisfy the condition
const large = numbers.filter((item, index, array) => {
  return item > 4;
});

// reduce takes an array and reduces it to just one value
// The prev is by default the 0 index value
const red = numbers.reduce((prev, item) => {
  return prev + item;
}, 0);

// some is similar to filter but returns true or false
const res = numbers.some((item, index, array) => {
  return item > 3;
});

// every checks for every single element and if its true only then it returns true
const eve = numbers.every((item, index, array) => {
  return item < 10;
});

// Find returns the first value where the condition is true and returns undefined otherwise
const check = numbers.find((item, index, array) => {
  return item > 3;
});

// console.log(check);
// console.log(large);
// console.log(newNums);

// =====> Spread and Rest Operator
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator

// Rest operation allows you to give any number of arrays/inputs to the function
function sum(...numbers) {
  return numbers;
}

// console.log(sum(nums, nums2));

// Concat
// Combines array
const newArrary = nums.concat(nums2, arr);
// console.log(newArrary);

// Slice
// returns a copy of a section of an array
let sliceArray = ["apple", "banana", "cherry", person];
newArr = sliceArray.slice(0, 3);
newArr = sliceArray.slice(-2);
// console.log(newArr);

// Splice
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @returns — An array containing the elements that were deleted.
let spliceArray = ["apple", "banana", "cherry", person];
// spliceArray.splice(0, 1, "orange");
// console.log(spliceArray);

// Fill
// Replaces everything (all indexes) in the array with whatever is provided with the fill
const dummy = [1, 2, 3, 4, 5];
// dummy.fill(0);
// dummy.fill(0, 2);
// console.log(dummy);

// FindIndex
const index = dummy.findIndex((item) => item === 2);
// console.log(index);

// Flat

const nestedArray = [1, 2, [2, 3], [4, 5, 6], 45, 6, 9];
// flat remove all nesting and give it as a plane array like [1,2,2,3,4,5,6,45,6,9]
const unflat = nestedArray.flat(2);
// console.log(unflat);

// console.log(Boolean(1));

// Reverse
const Dummy = [1, 2, 3, 4, 5];
Dummy.reverse();
// console.log(Dummy);

// Sort
const unSorted = [22, 45, 1, 23, 4, 9, 10];
const sorted = unSorted.sort((a, b) => a - b);
const decending = unSorted.sort((a, b) => b - a);
console.log(sorted);
console.log(decending);
