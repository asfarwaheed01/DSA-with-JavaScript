var hammingWeight = function (n) {
  if (n === 0) return 0;
  if (n > 0) {
    return (n & 1) + hammingWeight(n >>> 1);
  }
};

console.log(hammingWeight(11));
