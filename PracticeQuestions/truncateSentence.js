// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"

function truncateSentence(str, k) {
  const newStr = str.split(" ");
  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(newStr[i]);
  }
  return output.join(" ");
}

(s = "Hello how are you Contestant"), (k = 4);
console.log(truncateSentence(s, k));
