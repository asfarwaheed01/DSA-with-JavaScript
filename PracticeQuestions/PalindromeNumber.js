// A integer is palindrome when it reads same forward or backwards
// i.e: 121,

const isPalindrome = (x) => {
  return x === Number(x.toString().split("").reverse().join(""));
  //   return x === +Number(x.toString().split("").reverse().join(""));
};

const input = 101;
console.log(isPalindrome(input));

// For Strings

const strPalindrome = (s) => {
  const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

const str = "A man, a plan, a canal: Panama";
console.log(strPalindrome(str));
