// Circular Queue Implementation
// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
// Initially the front and rare of the circular queue are at the same point
// In circular Queue We have Fixed Size

var MyCircularQueue = function (k){ //k is the size of the array
    this.queue = [];
    this.size = k;
};

MyCircularQueue.prototype.enQueue = function(value){
    if(this.size === this.queue.length) return false;
    this.queue.push(value);
    return true 
};

MyCircularQueue.prototype.deQueue = function(){
    if(this.queue.length === 0) return false;
    this.queue.shift();
    return true;
}

MyCircularQueue.prototype.Front = function(){
    if(this.queue.length === 0) return -1;
    return this.queue[0];
}

MyCircularQueue.prototype.Rear = function(){
    if(this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
}

MyCircularQueue.prototype.isEmpty = function(){
    return this.queue.length === 0;
}

MyCircularQueue.prototype.isFull = function(){
    return this.size === this.queue.length;
}

var obj = new MyCircularQueue(3);
obj.enQueue(1);
obj.enQueue(3);
obj.enQueue(4);
obj.deQueue();
obj.enQueue(5);

console.log(obj.Front(),obj.Rear())