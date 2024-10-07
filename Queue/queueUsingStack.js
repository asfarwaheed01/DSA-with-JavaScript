// Implement queue using stack
// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

var myQueue = function(){
    this.s1 = [];
    this.s2 = [];
}

myQueue.prototype.push = function(x){
    this.s1.push(x)
}

myQueue.prototype.peek = function(){
    if(this.s2.length === 0){
        while(this.s1.length > 0){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1];
};
myQueue.prototype.pop = function(){
    if(this.s2.length === 0){
        while(this.s1.length > 0){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
    // return this.s1.shift(this.s1[0]); 
};
myQueue.prototype.empty = function(){
    return this.s1.length === 0 && this.s2.length === 0;
};


const queue = new myQueue();
queue.push(2)
queue.push(6)
queue.pop();
console.log(queue.peek());