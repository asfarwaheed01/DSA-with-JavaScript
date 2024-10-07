// LeetCode 234
// Palindrome Linked List

var isPalindrome = function (head) {
  let string1 = (string2 = "");
  let node = head;
  while (node !== null) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string1}`;
    node = node.next;
  }
  return string1 === string2;
};
