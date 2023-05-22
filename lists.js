'use strict';
//in this file we are going to learn limked lists
//the learning starts here

//reference to next Node
/*class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}*/
//singly linkedin lists
//objectives
//Define what singly linked lists are
//compare and contrast linked lists with arrays
//implement insertion,removal and traversal methods on singly linked lists

//Linked lists=>A data structure with a head and a tail, linked lists consist of nodes, and each node has a value and a popinter to another node or null
//a node stores value of an item, string or number

//COMPARISON BETWEEN LISTS AND ARRAYS
//LISTS
//=Do not have indexes
//=Connected via nodes with a next pointer
//=Random access is not allowed

//ARRAYS
//=Indexed in order
//=Insertion and deletion can be expensive
//can quickly be accessed at a specific index

//piece of data-val
//reference to next node -next
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
//var first=new Node('Hi')
//first.next=new Node('there')
//first.next.next=new Node('how')
//first.next.next.next=new Node('are')
//first.next.next.next.next=new Node('you')
//console.log(first)

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;

    }
    push(val){

    }
}

var list=new SinglyLinkedList()
list.push('HELLO')
list.push('GOODBYE');
//push in lists is inserting at the end

//Solution to push