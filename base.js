'use strict';
//The problem
//gic=ven an integer, num, return its base seven represention as a string
//Example num=42, return 60
//Solution
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
console.log(returnBase(num));