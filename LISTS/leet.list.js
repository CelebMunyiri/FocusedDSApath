
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
      console.log(current.val + (current.next ? " -> " : ""));
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

//DELETE A Node from middle of a list

function deleteMiddle(head) {
    // Edge case: if there's only one node, return null
    if (head === null || head.next === null) {
      return null;
    }
  
    // Initialize two pointers: slow and fast
    let slow = head;
    let fast = head;
    let prev = null;
  
    // Move fast pointer by 2 steps and slow pointer by 1 step
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
  
    // Delete the middle node
    if (prev !== null) {
      prev.next = slow.next;
    }
  
    return head;
  }
  
  //REORDERING A LIST
  function reorderList(head) {
    if (!head || !head.next) return;
  
    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Step 2: Reverse the second half of the list
    let prev = null;
    let curr = slow;
    while (curr) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
  
    // Step 3: Merge the two halves
    let first = head;
    let second = prev;
    while (second.next) {
      let temp1 = first.next;
      let temp2 = second.next;
      first.next = second;
      second.next = temp1;
      first = temp1;
      second = temp2;
    }
  }