// Creating Strings
const string = new String("Asfar");
const string2 = "Asfar"; // double quotes
const string3 = "Asfar"; // single quotes
const string4 = `Asfar`; // backticks
const string5 = `${string4} is a software engineer`;
// console.log(string5);

function test(string, youtubeChannel, person) {
  console.log(string, youtubeChannel, person);
}
const name = "Asfar";
const profession = "software engineer";
// console.log(test`follow ${name} the ${profession}`);

// Length of a string
const str = "Asfar is a software Engineer";
console.log(str.length);

// Access specific character
console.log(str[3]);
console.log(str.charAt(3));

// Looping
for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);
}

// Modifying string
// You cannot modify strings like this as they as immutable
str[3] = "b";
console.log(str);
// use replace method it does not modify the original string instead it returns a new string
console.log(str.replace("Engineer", "Developer")); // Replaces the first instance
console.log(str.replaceAll("e", "c")); // Replaces All the instances of that variable

// Concat
const newStr = str.concat(" and a Full Stack developer");
console.log(newStr);
const Full = "  New String  ";
console.log(Full.trim()); // Will not remove the spaces in between words

// Searching
console.log(newStr.indexOf("Full"));
console.log(newStr.lastIndexOf("e"));

// Converting
const hello = 1;
console.log(String(hello));

// Objects and Lists cannot be converted to string using this method
const obj = { name: "Asfar" };
console.log(JSON.stringify(obj));

// Can use JSON.parse to convert the string back to an object

// Use the str.toUpperCase() and str.toLowerCase()
// To distinguish between A and a JS uses ASCII values

console.log(str.charCodeAt());
// For a specific value
console.log(String.fromCharCode(97));

// String Comparison
const str1 = "apple";
const str2 = "apple";
console.log(str1.localeCompare(str2));

// Find Something inside a string
console.log(str.includes("Asfar"));

// Split and join strings
console.log(str.split("e"));
const arr = ["apple", "banana"];
console.log(arr.join(" and "));
