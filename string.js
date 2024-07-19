"use strict";
//Merging two strings

function mergeStrings(word1, word2) {
  let merged="";
  let length1 = word1.length;
  let length2 = word2.length;
  let maxLength = Math.max(length1, length2);

  for(let i=0; i<maxLength; i++) {
   if(i < length1){
     merged += word1[i];
   }
   if(i < length2){
     merged += word2[i];
   }
  }
return merged;
}

let word1='abc'
let word2='pqr'

console.log(mergeStrings(word1, word2)) // Outputs: abcpqr

//Reversing a string

function reverseString(str) {
  let reversed = "";
  for(let i=str.length-1; i>=0; i--) {
    reversed += str[i];
  }
  return reversed;
}