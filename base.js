'use strict';
//The problem
//given an integer, num, return its base seven represention as a string
//Example num=42, return 60
//Solution1
/*
let num=42;
const returnBase=function(num){
    let base=num/7
    if(num%7===0){
        base;
    }
    else{
        return 
    }
    return String(`${base}0`);

}
console.log(returnBase(num));*/
//Solution2 starts here
function convertToBase7(num){
    if(num===0){
        return 0;
    }
    let isNegative=false;
    if(num<0){
        num=-num//convert negative number to positive
    }
    let result="";
    while(num>0){
        result=(num%7)+result;
        num=Math.floor(num/7)
    }
    if(isNegative){
        result="-"+result;//adding negative sign if the original number was negative 
    }
    return result;
}
const num=42
console.log(convertToBase7(num));