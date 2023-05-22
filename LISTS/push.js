//push operation for SINGLY LINKED LISTS
//Nature of the function
//1.Accept a value
//2.Create a new node using the value passed to the function
//3.if there is no head property, set the head and tail to be the newly created node
//4.Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
//5.increment the length by one

class Node{
    constructor(val){
        this.val=val;
        this.next=null;

    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
push(val){
var newNode=new Node(val);
if(!this.head){
    this.head=newNode
    this.tail=this.head
}else{
    this.tail.next=newNode;
    this.tail=newNode;
}
this.length++;
return  this
}
}

var list=new SinglyLinkedList()
//list.push('HELLO');
//list.push('GOODBYE')
//console.log(list)