// longest non repeating substring
var lengthOfLongestSubstring = function (s) {
  const seen = new Set();
  let left = 0;
  let bestStart = 0,
    bestLen = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    while (seen.has(ch)) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(ch);
    const winLen = right - left + 1;
    if (winLen > bestLen) {
      bestLen = winLen;
      bestStart = left;
    }
  }
  return s.slice(bestStart, bestStart + bestLen);
};

const str = "asfar";

console.log(lengthOfLongestSubstring(str));
