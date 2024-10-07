// Basic Queue implementation

class Queue {
  constructor() {
    this.itmes = [];
  }

  enqueue(element) {
    this.itmes.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow, cannot perform dequeue";
    }
    return this.itmes.shift();
  }
  isEmpty() {
    return this.size() === 0;
  }
  front() {
    if (this.isEmpty()) {
      return "No elements in the Queue";
    }

    return this.itmes[0];
  }

  size() {
    return this.itmes.length;
  }

  printQueue() {
    let strQueue = "";
    for (let i = 0; i < this.size(); i++) {
      strQueue += this.itmes[i] + " ";
    }
    return strQueue;
  }
}

const obj = new Queue();
obj.enqueue(10);
obj.enqueue(11);
obj.enqueue(12);
console.log(obj);
console.log(obj.size());

obj.dequeue();
console.log(obj);
console.log(obj.front());
console.log(obj.printQueue());
