'use strict';
//RECURSION
//it is a different way of writing solutions 
//Recursion is a process that calls itself (function)
//Recursion is everywhere
//Example of recurssive function is JSON.parse/JSOn.stringify
//document.getElememtNyId and DOM traversal algorithm
//Anytime a function is invoked, it is placed (pushed) on the top of the call stack
// Real life example, when a paper is added on top of a stack of papers it always goes on the top and when you remove you remove it from the top first

//example1

function takeShower(){
    return 'Showering!';
}
function eatBreakFirst(){
    let meal=cookFood()
    return `Eating ${meal}`
}
function cookFood(){
    let items=["Oatmeal","Eggs","ProteinShake"]
    return items[Math.floor(Math.random()*items.length)]
}
function wakeUp(){
    takeShower()
    eatBreakFirst()
    console.log(`Okay, ready to miuv to work`)
}

wakeUp();
//In the abaove example when you run it, it calls takeShowerfunction which returns showeing, the function then calls eatBreakfast function which then inded callsfunction cookFood which returns a random meal
//When functions are invoked, they are always added at the top of the stack

//Writing Recursive Code (Recursive function)
//HOW RECURSIVE FUNCTION WORKS
//INVOKE THE SAME FUNCTION WITH A DIFFERENT INPUT UNTIL YOU REACH YOUR CODEBASE
//BASECASE is condition when the recursion ends

function countDown(number){
    if(number<=0){
        console.log('All Done!');
        return;
    }
    console.log(number)
number--;
countDown(number)
}
countDown(3)
//How the piece of code above works
//0 is the codebase and num is the input
//print 3
//counDowb(2)
//print 2
//countDown(1)
//print 1
//countDown 0 at the codebase an so the fuction completes executing

//EXAMPLE 2
function sumRange(num){
    if(num===1) return 1;//This is the the base case
    return num +sumRange(num-1);


}
console.log(sumRange(4))
//it outputs 10 because at first it returns 4 then 4-1=3, then 3-1=2 the 2-1=1, so the total sum is 10
//The base case (num===1) prevents us from falling falling, from the function calling itself with no end

//Writing factorial iteratively
//what the function does is that it first returns 4 as the num is not 1, then calls function factorial again,which returns num-1 and it continues until num =1 and multiplies the nums to give out the factorial

function factorial(num){
    if(num===1) return 1;
    return num*factorial(num-1)
}
console.log(factorial(4))

//Approach of doing factorial without recursion
function factor(number){
   let inn=1;
    for(let i=number;i>0;i--){
inn=inn*i;
    }
    return inn;
}
console.log(factor(7))

//Pitfalls in doing Recursion
//Having undefined base case like if you put a big -number in the base case
//Forgetting to return
//if we return the function with itself as it wont have an end
//if we print out a value instead of returning it directly after base case the base case

//HELPER METHOD RECURSION
//We have two functions

//example
function outer(input){
    var outerScopedVariable=[]

    function helper(helperInput){
        //modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
}
//another example
function collectOdds(arr){
    let result=[];
    function help(helpInput){
        if(helpInput.length===0){
            return;
        }
        if(helpInput[0]%2 !==2){
            result.push(helpInput[0])
        }
        help(helpInput.slice(1))
    }
    help(arr)
    return;
}
console.log(collectOdds([1,2,3,4,5,6,7,8,9]))

//MORE EXAMPLE *PURE RECURSION*
function collectOdds(arr){
    let newArr =[];
    if(arr.length===0){
        return newArr;
    }
    if(arr[0] % 2 !==2){
newArr.push(arr[0]);
    }
newArr=newArr.concat(collectOdds(arr.slice(1)));
return newArr;
}
console.log(collectOdds([1,2,3,4,5]))

