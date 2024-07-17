"use strict";

//LEETCODE PROBLEM 23
//MERGE K SORTED LISTS  

// class async function getData() {
//   return Promise.resolve('data');
// }

// async function getMoreData(data) {
//   return Promise.resolve(data + 'more data');
// }

// async function getAll() {
//   const data = await getData();
//   const moreData = await getMoreData(data);
//   return `All the data: ${data}, ${moreData}`;
// }

// getAll().then((all) => {
//   console.log('all the data')
// })

class Node{
    constructor(head){
        this.head=0;
        this.next=null;
    }
}
