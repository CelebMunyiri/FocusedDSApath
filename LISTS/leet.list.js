
//PROBLEM
//DELETE NTh NODE FROM A LIST
class ListNode{
    constructor(data=0,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(head=null){
        this.head=head;
    }
}
//Implementing fast and slow pointer
function removeNthFromEnd(head,n){
let dummy=new ListNode(0,head);
let fast = dummy;
let slow = dummy;

for(let i=0;i<n;i++){
    fast=fast.next;
}

while(fast.next!=null){
    fast=fast.next;
    slow=slow.next;
}

 // Remove the nth node from the end
 slow.next = slow.next.next;
  
 // Return the head of the modified list
 return dummy.next;
}


//test
function printList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val.toString() + (current.next ? " -> " : ""));
      current = current.next;
    }
    console.log();
  }
  
  // Example Usage
  // Create a linked list [1, 2, 3, 4, 5]
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  
  // Remove the 2nd node from the end
  let newHead = removeNthFromEnd(head, 2);
  printList(newHead);  // Output: 1 -> 2 -> 3 -> 5

