// An anagram is a word or phrase which is formed by rearranging the words or letters of a different work or phrase
// Input:"nagaram", Output: "anagram" => true

const isAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
};

console.log(isAnagram("rat", "cat"));

const optimizedAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
console.log(optimizedAnagram("nagaram", "anagram"));
