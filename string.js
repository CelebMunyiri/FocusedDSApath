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
  // str=str.split(" ");
  // let reversed = "";
  // for(let i=str.length-1; i>=0; i--) {
  //   reversed += str[i];
  // }
  // return reversed;
  const words = str.trim().split(/\s+/);
console.log(words);
  // Step 2: Reverse the array of words
  words.reverse();

  // Step 3: Join the words with a single space
  return words.join(' ');
}

let word ="the sky is blue"

console.log(reverseString(word));

// Example 1
const s1 = "the sky is blue";
console.log(reverseString(s1));  // Output: "blue is sky the"

// Example 2
const s2 = "  hello world  ";
console.log(reverseString(s2));  // Output: "world hello"

// Example 3
const s3 = "a good   example";
console.log(reverseString(s3));  // Output: "example good a"