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
