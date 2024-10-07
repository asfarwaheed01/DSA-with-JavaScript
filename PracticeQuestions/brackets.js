// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// function brackets(s) {
//   //   s = s.split("");
//   //   console.log(s);
//   let arr = [];
//   const valid = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (valid[char]) {
//       var x = arr[arr.length - 1];
//       if (arr.length == 0 || valid[char] !== x) {
//         return false;
//       }
//       arr.pop(x);
//     } else {
//       arr.push(x);
//       return true;
//     }
//   }
// }
function brackets(s) {
  let arr = [];
  const valid = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (valid[char]) {
      arr.push(char);
    } else if (char === "}" || char === ")" || char === "]") {
      if (valid[arr.pop()] !== char) {
        return false;
      }
    }
  }
  return arr.length === 0;
}

var s = "()[]{}";
console.log(brackets(s));
