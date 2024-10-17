// Double Linked List
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null
    }
}

class DoblyLinkedList{
    constructor(){
        this.head = null
    }
    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        if(this.head){
            this.head.prev = newNode
        }
        this.head = newNode;
    }
    addlast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return
        }
        let current = this.head;
        while(current){
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current
    }
}