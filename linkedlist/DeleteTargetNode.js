// leet code 237
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
