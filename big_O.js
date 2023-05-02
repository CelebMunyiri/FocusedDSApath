"use strict"

//intro to BIG-O NOTATION
//The section contains math for calculating complexity lmao
//Descibe what is big-o notation
// calculate time complexity of a solution "amount of time an algorith uses"
//calculate time complexity of an algorithm
//Solutions maybe "Great" "Pretty good" "Only ok" "Eeeh" "Awful"
//Useful for discussing trade-oofs between different approaches
//Identifying parts of the code that are in-efficient

//An example "Function that calculates the sum of all numbers from 1 upto (and including) some number n"

//method A

function addUpto(n){
 let total=0
 for(let i=0;i<=n;i++){
    total+=i
    
 }
 return total
}

//console.log(addUpto(1000000000))

//method B

function addingUpto(n){
   return n*(n+1)/2
}
//console.log(addingUpto(5))

//What does better Mean
//Faster?
//Less memory-intensive
//More readable

//Calculating time a code takes to run using builtin timers
// time complexity for method A
let t1=performance.now()
addUpto(1000000000)
let t2=performance.now()
console.log(`Time elapsed :${(t2-t1)/1000} second.`)
//method A takes 1.8482694001197815 seconds

// time complexity for method B 
let time1=performance.now()
addingUpto(1000000000)
let time2=performance.now()
console.log(`Time elapsed: ${(time2-time1)/1000} seconds`)
//method B takes 0.00005159997940063476 seconds

//So we can say method B is more efficient than method A as it takes less time to run hence faster than method A
//This is determined by number of operations a computer have to do
//in the method A there are n*n operations as the add and equals operation are assigned the number of n times hence Big O of this function is f(n) as the operations increases as n increases 
//in the method B only three operations takes place (n+1), (n+1)*n and third operation is the divide n*(n+1)/2 hence Big O of this is f(1) as still 3 operations are included even if the value of n increases
 

//Another example say example 3
function countUpAndDown(n){
    console.log("Going Up")
    for(let i=0;i<n;i++){
        
        console.log(i)
    }
    console.log("Going Down")
    for(let j=n-1;j>=0;j--){
        
        console.log(j)
    }
}
countUpAndDown(10)
//The Big O of this operation if f(n) though there are 2 for loops included, this is because as n increases as so it does to the other so times increases as n increases hence f(n)

//Moar Example, NESTED FOR LOOP
function printAllPairs(n){
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            console.log(i,j)
        }
    }
}
printAllPairs(10)
//In this example as n increases in one n the other does so we have 0(n) inside 0(n) which results to 0(n*n) which is equal to 0(n)**2

//Simplifying Big 0 notations
//Counting is hard!
// When determining the complexity of an algorithm, there are some helpful rule of thumbs for big O expressions
//These rules of thumb are consequences of the definition of big O notation

//Constants Don't matter 0(2n)=0n
// Big 0(500)=0(1)
// 0(13n**2)=0(n)**2
// 0(100n+50)= 0(n)
// 0(n**2 +5n +8) =0(n**2)

//BIG O SHORTHANDS
//1. arithmetic operations are constant
//2. Variable assignment is constant
//3. Accessing elements in an array using index or object by key is constant
//4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

// A couple More examples
function logAtleast5(n){
    for(var i=0;i<=Math.max(5,n);i++){
        console.log(i)
    }
}
logAtleast5(1)

//The Big O of this is 0(1) for number less than 5 but 0(n) for number greater than 5 fo after simplifying it we consider the higher side which is 0(n)

//SPACE COMPLEXITY
//The amount of memory taken 
//Auxiliary space-refer to space required by the algorithm, not including space taken up by the inputs
//Rules of thumb for space complexity in js
//most primitives (booleans, numbers,undefined, null) are constant space
 //Strings require 0(n) space where n is the string length
 //Reference types are generally 0(n), where n is the length (for arrays) or the number of keys (for objects)
//example
 function sum(arr){
    let total=0
    for(let i=0;i<arr.length;i++){
        total+=arr[i]
    }
    return total;
 }// The space complexity of this is 0(1) as there is omly varaible used that stores the total
//more example
function addToArr(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        newArr.push(2*arr[i])
    }
    return newArr
}
console.log(addToArr([4,5,6,7,8]));
//The space complexity of this is Space 0(n) Space as the space increases as the size of array increases 

//LOGS
//sometimes big 0 expressions involve more complex mathematical expressions

