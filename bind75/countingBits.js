var countBits = function (n) {
  let output = [];
  for (let i = 0; i <= n; i++) {
    output.push(
      i
        .toString(2)
        .split("")
        .reduce((acc, bit) => acc + Number(bit), 0)
    );
  }
  return output;
};

console.log(countBits(2));
