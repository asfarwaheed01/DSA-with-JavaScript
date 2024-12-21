// Node
class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    if (!this.head) {
      return undefined;
    }
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }
  getByIndex(index) {
    let counter = 0;
    let node = this.head;
    for (let i = 0; i <= index; i++) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  set(index, value) {
    const node = this.getByIndex(index);
    if (node) {
      node.head = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    const newNode = new Node(value);
    const temp = this.getByIndex(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  size() {
    // return this.length; this can be used as well

    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return [count, this.length];
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
// myLinkedList.pop();
// myLinkedList.unshift(4);
// myLinkedList.shift();
// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.getByIndex(2));
// console.log(myLinkedList.set(1, 6));
console.log(myLinkedList.size());
// console.log(myLinkedList);
