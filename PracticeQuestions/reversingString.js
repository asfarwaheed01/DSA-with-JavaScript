// Reverse a string
// Input = 'hello' ===> Output = 'olleh'

function reverseString(str) {
  if (str === "") {
    return "";
  } else return reverseString(str.substr(1)) + str.charAt(0);
}

function reverseString2(str){
  return str.split('').reverse().join('');
}
const str = "hello";
console.log(reverseString(str));
console.log(reverseString2(str));




