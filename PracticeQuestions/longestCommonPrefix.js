// Lettcode 14
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let str = strs[i];
    let j = 0;
    while (j < prefix.length && j < str.length && prefix[j] === str[j]) {
      j++;
    }
    prefix = prefix.slice(0, j);
  }
  return prefix;
};

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
