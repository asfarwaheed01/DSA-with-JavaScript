// Basic Stack Implementation
class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty, can't perform pop.";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty, can't perform peek.";
    }
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
  printStack() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    const elements = [];
    for (let i = this.size() - 1; i >= 0; i--) {
      elements.push(this.stack[i]);
    }
    return elements;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());
console.log(stack.printStack());
