'use strict';
/*
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?*/

function isPalindrome(x){
    if(x<0){
        return false;
    }
    let reversed=0;
    let original=x;

    while(x>0){
        reversed=(reversed*10)+(x%10)
        x=Math.floor(x/10)
    }
    return reversed===original
    //here we compare the reversed number to original number and return a boolean if its true or false
}

console.log(isPalindrome(121)) //true
console.log(isPalindrome(-121)) //false
console.log(isPalindrome(555))//true
console.log(isPalindrome(22299000))//false
console.log(isPalindrome(3244423))//true