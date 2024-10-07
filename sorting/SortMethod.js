// sort() method in ja

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

console.log(fruits.sort());

const nums = [1, 5, 2, 11, 7];
console.log(nums.sort((a, b) => a - b)); //b - a for decending

// for objects

const people = [
  { name: "Asfar", age: 23 },
  { name: "Asjad", age: 24 },
  { name: "Ali", age: 21 },
  { name: "Ahmad", age: 20 },
];
console.log(people.sort((a, b) => a.age - b.age));
