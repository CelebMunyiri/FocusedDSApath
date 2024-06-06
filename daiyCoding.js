"use strict";
//PROBLEM STATEMENT
/*
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/
//SOLUTION
function longestSubstringWithKDistinct(s, k) {
    if (k === 0) return 0;

    let charCount = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        charCount[char] = (charCount[char] || 0) + 1;

        while (Object.keys(charCount).length > k) {
            let leftChar = s[left];
            charCount[leftChar]--;
            if (charCount[leftChar] === 0) {
                delete charCount[leftChar];
            }
            left++;
        }

        let currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

// Test case
let s = "abcba";
let k = 2;
console.log(longestSubstringWithKDistinct(s, k));  // Output: 3 ("bcb")
