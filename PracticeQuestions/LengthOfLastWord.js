// Leetcode 58
// Find the length of the last word in a string

function lengthOfLastWord(str) {
  str.split(" ");
  let newStr = str.split(" ").filter((word) => word !== "");
  return newStr[newStr.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
