// Leetcode 83
// Remove duplicates from a sorted Linked List
var deleteDuplicates = function(head) {
    let current = head;
    while(current && current.next){
        if(current.val === current.next.val){
            current.next = current.next.next;
        }else{
        current = current.next;
        }
    }
    return head;
};