'use strict';
//practise on the sliding window algorithm
//Its a technique to increase the efficiency of any problem which can fit into it's algorithm

//problem:FOR AN ARRAY WE NEED TO FIND THE MAX SUM OF P CONSECUTIVE ELEMENTS
/*
const array=[2,4,6,1,-2,9,0]; //length=7, p=3
//we will be using two pointers i and j
const findSum=(arr)=>{
    let maxSum=0
    
   for(let i=0;i<=n-package;i++){
    let sum=0
    for(let j=i;j<i+p;j++){

    }
   }
}
*/
// ANOTHER EXAMPLE ,FIND THE MAX SUBARRAY SUM OF SIZE 3
const array=[5,1,3,2,11,5,7,8]

//brute force approach first,
const maxSubArraySum=(arr,size)=>{
    if(size<0 || size >arr.length) return null;
let currSum=0;
let maxSumSeen=-Infinity;

for(let i=0;i<arr.length;i++){
    currSum+=arr[i];
    if(i>=size-1){
        maxSumSeen=Math.max(currSum,maxSumSeen);
        currSum-=arr[i-(size-1)];
    }
}
return maxSumSeen;


}
const arr1=[1,2,3,5,4,8,6,2]
console.log(maxSubArraySum(arr1,3))
console.log(maxSubArraySum(array,2))