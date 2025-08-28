function flatList(arr) {
  const output = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length >= 2) {
      console.log("The length is;", arr[i].length);
      console.log("The nested is", arr[i]);
      for (let j = 0; j <= arr[i].length - 1; j++) {
        output.push(arr[i][j]);
      }
    } else {
      output.push(arr[i]);
    }
  }
  return output.sort();
}

function recussionsList(arr) {
  let output = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    const item = arr[i];
    if (arr[i].length >= 1) {
      output.push(...recussionsList(arr[i]));
    } else {
      output.push(arr[i]);
    }
  }

  return output;
}

const arr = [1, 2, [3, 4, 7], [5, 6], 7, [8, 9, 0]];
const arr1 = [1, 2, [3, 4, 7], [5, 6, 7, [8, 9, 0]]];
// console.log(flatList(arr))
console.log(recussionsList(arr1));
